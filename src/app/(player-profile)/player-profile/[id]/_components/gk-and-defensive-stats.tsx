import React from "react";
import { parseCookies } from "nookies";
import { UserProfile } from "./player-data-type";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import CommonSkeleton from "./common-skeleton";

const COOKIE_NAME = "googtrans";

type StatItem = {
  label: string;
  value: string | number | undefined;
};

const GkAndDefensiveStats = ({
  data,
  isLoading,
  error,
  isError,
}: {
  data?: UserProfile;
  isLoading: boolean;
  error: unknown;
  isError: boolean;
}) => {
  const cookie = parseCookies()[COOKIE_NAME];
  const lang = cookie?.split("/")?.[2] || "en";

  if (isLoading) {
    return <CommonSkeleton />;
  }

  if (isError) {
    const message =
      error instanceof Error ? error.message : "Something went wrong!";
    return <ErrorContainer message={message} />;
  }

  const defensiveInfo = data?.defensive ?? [];
  const gkInfo = data?.gkstats ?? [];

  if (!defensiveInfo.length && !gkInfo.length) return null;

  const getDefensiveItems = (
    info: NonNullable<UserProfile["defensive"]>[number],
  ): StatItem[] => [
    {
      label:
        lang === "fr"
          ? "Tacles"
          : lang === "es"
            ? "Intentos de entrada"
            : "Tackle Attempts",
      value: info.tackleAttempts,
    },
    {
      label:
        lang === "fr"
          ? "Tacles réussis: possession"
          : lang === "es"
            ? "Entrada exitosa: con posesión"
            : "Tackle Succeeded: Possession",
      value: info.tackleSucceededPossession,
    },
    {
      label:
        lang === "fr"
          ? "Tacles réussis : aucune possession"
          : lang === "es"
            ? "Entrada exitosa: sin posesión"
            : "Tackle Succeeded: No Possession",
      value: info.tackleSucceededNOPossession,
    },
    {
      label:
        lang === "fr"
          ? "Tacles ratés"
          : lang === "es"
            ? "Entrada fallida"
            : "Tackle Failed",
      value: info.tackleFailed,
    },
    {
      label:
        lang === "fr"
          ? "Ballons Récupérés"
          : lang === "es"
            ? "Balones recuperados"
            : "Turnover Won",
      value: info.turnoverwon,
    },
    {
      label:
        lang === "fr"
          ? "Interceptions"
          : lang === "es"
            ? "Intercepciones"
            : "Interceptions",
      value: info.interceptions,
    },
    {
      label:
        lang === "fr"
          ? "Récupérations"
          : lang === "es"
            ? "Recuperaciones"
            : "Recoveries",
      value: info.recoveries,
    },
    {
      label:
        lang === "fr" ? "Dégagement" : lang === "es" ? "Despejes" : "Clearance",
      value: info.clearance,
    },
    {
      label:
        lang === "fr"
          ? "Tirs Bloqués"
          : lang === "es"
            ? "Bloqueos totales"
            : "Total Blocked",
      value: info.totalBlocked,
    },
    {
      label:
        lang === "fr"
          ? "Tirs bloqués"
          : lang === "es"
            ? "Disparos bloqueados"
            : "Shot Blocked",
      value: info.shotBlocked,
    },
    {
      label:
        lang === "fr"
          ? "Centres Bloqués"
          : lang === "es"
            ? "Centros bloqueados"
            : "Cross Blocked",
      value: info.crossBlocked,
    },
    {
      label: lang === "fr" ? "Erreurs" : lang === "es" ? "Errores" : "Mistakes",
      value: info.mistakes,
    },
    {
      label:
        lang === "fr"
          ? "Duels aériens"
          : lang === "es"
            ? "Duelos aéreos"
            : "Aerial Duels",
      value: info.aerialDuels,
    },
    {
      label:
        lang === "fr"
          ? "Duels physiques"
          : lang === "es"
            ? "Duelos físicos"
            : "Physical Duels",
      value: info.phvsicalDuels,
    },
    {
      label:
        lang === "fr"
          ? "Buts contre son camp"
          : lang === "es"
            ? "Goles en propia puerta"
            : "Own Goals",
      value: info.ownGoals,
    },
  ];

  const getGkItems = (
    info: NonNullable<UserProfile["gkstats"]>[number],
  ): StatItem[] => [
    { label: "Catches", value: info.catches },
    { label: "Parries", value: info.parries },
    { label: "Aerial Control", value: info.aerialControl },
    { label: "Defensive Line Support", value: info.deFensiveLineSupport },
    { label: "Goals Conceded", value: info.goalsConceded },
    { label: "Penalty Kick Saves", value: info.penaltKitkSave },
    { label: "Saves", value: info.saves },
  ];

  const defensiveStats = defensiveInfo.flatMap(getDefensiveItems);
  const gkStats = gkInfo.flatMap(getGkItems);
  const title = gkStats.length ? "Defensive & GK stats" : "Defensive stats";

  const renderStatList = (items: StatItem[], className: string) => (
    <ul className={className}>
      {items.map((item, index) => (
        <li
          key={`${item.label}-${index}`}
          className="grid min-w-0 grid-cols-[minmax(0,1fr)_minmax(5.5rem,0.45fr)] items-center gap-3"
        >
          <span className="break-words text-sm font-medium leading-tight text-white md:text-xl">
            {item.label}
          </span>
          <span className="rounded-md bg-white px-3 py-1 text-sm font-semibold leading-tight text-black md:text-xl">
            {item.value ?? "N/A"}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="container relative mx-auto mb-6 overflow-hidden rounded-[36px] bg-[url('/assets/profiles/profile_bg.svg')] bg-cover bg-center bg-no-repeat p-8 md:rounded-[72px] md:p-16">
      {/* <div className="absolute inset-0 bg-black/70" /> */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 rounded-[28px] border-[4px] md:border-[6px] border-primary shadow-[0_0_24px_rgba(16,230,7,0.3)] md:inset-8 md:rounded-[64px]"
      />
      <div className="relative z-10 overflow-hidden rounded-[18px] border border-white/70 bg-black/45 md:rounded-[24px]">
        <h3 className="border-b border-white/70 bg-white/[0.08] px-4 py-1 text-center text-xl font-dagger font-bold leading-tight text-primary md:text-3xl">
          {title}
        </h3>
        <div className="grid gap-6 p-4 lg:grid-cols-3 md:p-6">
          {defensiveStats.length > 0 && (
            <div className="lg:col-span-2">
              {renderStatList(
                defensiveStats,
                "grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2 md:gap-y-4",
              )}
            </div>
          )}
          {gkStats.length > 0 &&
            renderStatList(gkStats, "space-y-3 md:space-y-4")}
        </div>
      </div>
    </section>
  );
};

export default GkAndDefensiveStats;
