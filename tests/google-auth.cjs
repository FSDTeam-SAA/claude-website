// Run: node tests/google-auth.cjs
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");
function load(file, overrides = {}, env = {}) {
  const exports = {};
  const source = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  vm.runInNewContext(source, {
    exports, require: name => overrides[name] || require(name),
    process: { env }, URL, AbortSignal, console: { error() {} }, fetch: overrides.fetch,
  }, { filename: file });
  return exports;
}
(async () => {
  const calls = [];
  const { createAuthOptions } = load("src/lib/auth.ts", {
    "./backend-auth": { backendAuthRequest: async (path, body) => {
      calls.push({path, body});
      return { data: { user: { _id: "u", role: body.role }, accessToken: "session-token" } };
    } },
  });
  const player = createAuthOptions();
  const goalkeeper = createAuthOptions();
  await player.callbacks.redirect({url: "/?google_role=player", baseUrl: "https://analyticsoccer.com"});
  await goalkeeper.callbacks.redirect({url: "https://analyticsoccer.com/?google_role=gk", baseUrl: "https://analyticsoccer.com"});
  await player.callbacks.signIn({user: {}, account: {provider: "google", id_token: "a"}});
  await goalkeeper.callbacks.signIn({user: {}, account: {provider: "google", id_token: "b"}});
  assert.deepEqual(calls.map(call => call.body.role), ["player", "gk"]);
  const admin = createAuthOptions();
  await admin.callbacks.redirect({url: "/?google_role=admin", baseUrl: "https://analyticsoccer.com"});
  await admin.callbacks.signIn({user: {}, account: {provider: "google", id_token: "c"}});
  assert.equal(calls[2].body.role, "player");
  assert.equal(await admin.callbacks.redirect({url: "https://evil.example/?google_role=gk", baseUrl: "https://analyticsoccer.com"}), "https://analyticsoccer.com");
  assert.equal(await admin.callbacks.signIn({user: {}, account: {provider: "google"}}), "/login?error=GoogleTokenMissing");
  const failing = load("src/lib/auth.ts", {"./backend-auth": {backendAuthRequest: async () => {throw new Error("backend unavailable");}}}).createAuthOptions();
  assert.equal(await failing.callbacks.signIn({user: {}, account: {provider: "google", id_token: "d"}}), "/login?error=GoogleBackendLoginFailed");
  const urls = [];
  const fetchMock = async url => {
    urls.push(url.toString());
    return {ok: true, status: 200, json: async () => ({success: true, data: {user: {_id: "u"}, accessToken: "t"}})};
  };
  const helper = (env, fetch = fetchMock) => load("src/lib/backend-auth.ts", {fetch}, env).backendAuthRequest;
  await helper({BACKEND_URL: "https://api.analyticsoccer.com/", NEXT_PUBLIC_BACKEND_URL: "http://localhost:5010/api/v1"})("/auth/google-login", {});
  await helper({NEXT_PUBLIC_BACKEND_URL: "https://api.analyticsoccer.com/api/v1/"})("/auth/login", {});
  assert.deepEqual(urls, ["https://api.analyticsoccer.com/api/v1/auth/google-login", "https://api.analyticsoccer.com/api/v1/auth/login"]);
  await assert.rejects(helper({})("/auth/login", {}), /not configured/);
  await assert.rejects(helper({BACKEND_URL: "https://api.example.com"}, async () => ({ok:false,status:502,json:async()=>{throw Error();}}))("/auth/login", {}), /non-JSON response \(502\)/);
  console.log("PASS: request role isolation, public roles, safe redirects, missing token, backend failure, URL normalization, private URL preference, invalid response");
})().catch(error => { console.error(error); process.exitCode = 1; });
