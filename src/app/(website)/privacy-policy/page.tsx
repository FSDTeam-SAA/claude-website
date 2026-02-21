import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <div className="container py-10 md:py-14 lg:py-[72px]">
        <div>
          {/* Main Title */}
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold h_underline text-primary leading-normal md:leading-[120%]">
              PRIVACY POLICY — ANALYTIC SOCCER
            </h1>
            <p className="w-full flex items-center justify-between mt-4 text-[#616161] ">
              <span><strong className="text-primary">Effective Date :</strong> 02/18/2026 </span>
              <span><strong className="text-primary">Last Updated :</strong> 02/18/2026</span>
            </p>
          </div>

          <div className="space-y-4 md:space-y-5 lg:space-y-4 text-base text-[#616161] leading-[150%]">

            {/* 1 */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-normal leading-[120%]">
                1. Introduction
              </h2>
              <p>
                Analytic Soccer LLC (“Company,” “we,” “us,” or “our”) respects
                your privacy and is committed to protecting your personal data.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, store, disclose,
                and safeguard your information when you use our platform,
                applications, reports, events, or services (“Platform”).
              </p>
            </section>

            {/* 2 */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-normal leading-[120%]">
                2. Information We Collect
              </h2>

              <div>
                <h4 className="text-base md:text-lg lg:text-xl text-[#616161] font-normal leading-[120%] pb-2">We may collect the following categories of information :</h4>
                <p className="font-medium mb-2">Personal Information</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>name</li>
                  <li>email address</li>
                  <li>date of birth</li>
                  <li>nationality</li>
                  <li>contact information</li>
                </ul>
              </div>

              <div>
                <p className="font-medium mb-2">Player Performance Data</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>statistics</li>
                  <li>evaluations</li>
                  <li>rankings</li>
                  <li>testing results</li>
                  <li>training metrics</li>
                </ul>
              </div>

              <div>
                <p className="font-medium mb-2">Technical Data</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP address</li>
                  <li>device information</li>
                  <li>browser type</li>
                  <li>usage data</li>
                </ul>
              </div>

              <div>
                <p className="font-medium mb-2">Media Content</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>uploaded videos</li>
                  <li>photos</li>
                  <li>match footage</li>
                </ul>
              </div>
            </section>

            {/* 3 */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-normal leading-[120%]">
                3. How We Use Information
              </h2>
              <h4 className="text-base md:text-lg lg:text-xl text-[#616161] font-normal leading-[120%]">We use collected data to :</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>operate and maintain the Platform</li>
                <li>generate analytics and evaluations</li>
                <li>create player profiles</li>
                <li>improve services</li>
                <li>communicate with users</li>
                <li>provide customer support</li>
                <li>ensure security and fraud prevention</li>
                <li>comply with legal obligations</li>
              </ul>
            </section>

            {/* 4 */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-normal leading-[120%]">
                4. Legal Basis for Processing
              </h2>
              <h4 className="text-base md:text-lg lg:text-xl text-[#616161] font-normal leading-[120%]">We process personal data based on:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>user consent</li>
                <li>contractual necessity</li>
                <li>legitimate business interests</li>
                <li>legal obligations</li>
              </ul>
            </section>
            

            {/* 5 */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-normal leading-[120%]">
                5. Youth Privacy Protection
              </h2>
              <h4 className="text-base md:text-lg lg:text-xl text-[#616161] font-normal leading-[120%]">We are committed to protecting minors.</h4>
              <p>
                Users under 18 require parental or guardian consent.
              </p>
              <p>
                Parents may review, modify, or request deletion of a child’s data at any time.
              </p>
              <p>
                We limit public visibility of minor profiles when appropriate.
              </p>
            </section>

            {/* 6 */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-normal leading-[120%]">
                6. Children Under 13 (COPPA Compliance)
              </h2>
              <p>
                For children under 13, verifiable parental consent is required
                before personal data is collected.
              </p>
              <p>
                Parents may request access, correction, or deletion of their child’s data at any time.
              </p>
              <p>
                We do not knowingly collect unnecessary personal data from children.
              </p>
            </section>

            {/* 7 */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-normal leading-[120%]">
                7. Sharing of Information
              </h2>

              <h4 className="text-base md:text-lg lg:text-xl text-[#616161] font-normal leading-[120%]">We may share data with:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>authorized scouts and clubs for evaluation purposes</li>
                <li>service providers assisting platform operations</li>
                <li>legal authorities when required by law</li>
              </ul>
              <p>We do not sell personal data.</p>
            </section>

            {/* 8 */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-normal leading-[120%]">
                8. Data Retention
              </h2>
              <p>
                We retain information only as long as necessary for platform services,
                legal obligations, dispute resolution, and enforcement of agreements.
              </p>
            </section>

            {/* 9 */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-normal leading-[120%]">
                9. Data Security
              </h2>
              <p>
                We implement technical and organizational safeguards designed to
                protect your data. However, no system can guarantee absolute security.
              </p>
            </section>

            {/* 10 */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-normal leading-[120%]">
                10. International Users
              </h2>
              <p>
                If you access the Platform from outside the United States,
                you consent to data transfer and processing in the United States.
              </p>
            </section>

            {/* 11 */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-normal leading-[120%]">
                11. Your Rights
              </h2>
              <h4 className="text-base md:text-lg lg:text-xl text-[#616161] font-normal leading-[120%]">Depending on your jurisdiction, you may have the right to :</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>access your data</li>
                <li>correct inaccuracies</li>
                <li>delete data</li>
                <li>restrict processing</li>
                <li>withdraw consent</li>
              </ul>
              <p>
                Requests may be submitted using the contact information below.
              </p>
            </section>

            {/* 12 */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-normal leading-[120%]">
                12. Cookies & Tracking Technologies
              </h2>
              <p>
                We may use cookies, analytics tools, and tracking technologies
                to enhance user experience, analyze usage, and improve services.
              </p>
            </section>

            {/* 13 */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-normal leading-[120%]">
                13. Third-Party Services
              </h2>
              <p>
                We are not responsible for privacy practices of third-party services
                linked to or integrated with our Platform.
              </p>
            </section>

            {/* 14 */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-normal leading-[120%]">
                14. AI & Automated Processing
              </h2>
              <p>
                We may use automated systems or artificial intelligence to generate
                performance insights. These systems assist analysis but do not replace
                human decision-making.
              </p>
            </section>

            {/* 15 */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-normal leading-[120%]">
                15. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy periodically.
                Updated versions become effective upon posting.
              </p>
            </section>

            {/* 16 */}
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-normal leading-[120%]">
                16. Contact
              </h2>
              <p>
                Analytic Soccer LLC <br />
                Email : info@analyticsoccer.com
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;