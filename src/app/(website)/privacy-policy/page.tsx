import React from 'react'

const PrivacyPolicyPage = () => {
  return (
    <div>
        <div className="container py-10 md:py-14 lg:py-[72px]">
        <div className="">
          {/* Hero Title with Effective Date */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#616161] mb-4">Privacy Policy</h1>
          </div>

          <div className="space-y-6 text-base font-normal leading-[120%] text-[#a0a0a0]">
            {/* Introduction */}
            <section className="space-y-4">
              <p className="text-justify text-[#616161]">
                We value and respect your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website{" "}
                <span className="text-[#4dabf7] font-normal">yourwebsite.com</span> (or make a purchase from us).
              </p>
              <p className="text-justify text-[#616161]">
                By using our website, you agree to the practices described in this Privacy Policy. Please read it carefully to understand our views and practices regarding your personal data.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-normal text-[#616161] mb-8">Information We Collect</h2>
              <p className="text-justify text-[#616161]">We collect various types of information to provide and improve our auction services, including:</p>
              <ul className="list-disc pl-8 space-y-4">
                <li className="text-justify text-[#616161]"><strong >Personal Information:</strong> When you register for an account, place a bid, or use certain features on our site, we may collect your name, email address, phone number, billing address, shipping address, and payment details.</li>
                <li className="text-justify text-[#616161]"><strong >Transaction and Payment Information:</strong> We collect details of your bidding activity, including bids placed, items purchased, and payment history.</li>
                <li className="text-justify text-[#616161]"><strong >Usage Data:</strong> We collect information about your interactions with the site, including IP address, browser type, device type, pages visited, and time spent on the site. This helps us improve your user experience and optimize our services.</li>
                <li className="text-justify text-[#616161]"><strong >Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and other tracking technologies to enhance your experience and collect information about how you use our site.</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-normal text-[#616161] mb-8">How We Use Your Information</h2>
              <p className="text-justify text-[#616161]">We use the information we collect to:</p>
              <ul className="list-disc pl-8 space-y-3">
                <li className="text-justify text-[#616161]">Provide and manage the auction services, including processing bids, managing payments, and shipping orders.</li>
                <li className="text-justify text-[#616161]">Communicate with you about your account, bids, and purchases.</li>
                <li className="text-justify text-[#616161]">Respond to customer service inquiries and resolve any issues.</li>
                <li className="text-justify text-[#616161]">Personalize your experience on our site and recommend relevant products or auctions.</li>
                <li className="text-justify text-[#616161]">Analyze and improve the performance and functionality of the site, prevent fraud.</li>
                <li className="text-justify text-[#616161]">Ensure compliance with our Terms of Service, legal obligations, and prevent fraud.</li>
              </ul>
            </section>

            {/* How We Share Your Information */}
            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-normal text-[#616161] mb-8">How We Share Your Information</h2>
              <p className="text-justify text-[#616161]">We may share your personal information in the following situations:</p>
              <ul className="list-disc pl-8 space-y-3">
                <li className="text-justify text-[#616161]"><strong >Service Providers:</strong> We may share your data with trusted third-party service providers who assist us in operating the site, processing payments, and fulfilling orders. These providers are required to use your data solely for the purpose of providing services to us.</li>
                <li className="text-justify text-[#616161]"><strong >Legal Requirements:</strong> We may disclose your personal information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</li>
                <li className="text-justify text-[#616161]"><strong >Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your personal information may be transferred as part of the transaction.</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-normal text-[#616161] mb-4">Data Security</h2>
              <p className="text-justify text-[#616161]">
                We take the security of your personal information seriously and use industry-standard security measures to protect it. However, no data transmission over the Internet is completely secure, and we cannot guarantee the absolute security of your information.
              </p>
            </section>

            {/* Your Data Rights */}
            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-normal text-[#616161] mb-8">Your Data Rights</h2>
              <p className="text-justify text-[#616161]">Depending on your location, you may have certain rights regarding your personal data, including:</p>
              <ul className="list-disc pl-8 space-y-3">
                <li className="text-justify text-[#616161]">The right to access the personal information we hold about you.</li>
                <li className="text-justify text-[#616161]">The right to correct any inaccuracies in your personal information.</li>
                <li className="text-justify text-[#616161]">The right to delete your personal information, subject to legal and contractual obligations.</li>
                <li className="text-justify text-[#616161]">The right to withdraw consent where we process data based on consent.</li>
                <li className="text-justify text-[#616161]">The right to opt-out of marketing communications.</li>
              </ul>
              <p className="mt-6 text-justify text-[#616161]">
                If you wish to exercise any of these rights, please contact us at{" "}
                <a href="mailto:contact@yourwebsite.com" className="text-[#4dabf7] underline">
                  contact@yourwebsite.com
                </a>.
              </p>
            </section>

            {/* Data Retention */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-normal text-[#616161] mb-4">Data Retention</h2>
              <p className="text-justify text-[#616161]">
                We retain your personal information for as long as necessary to provide services, comply with legal obligations, and resolve disputes. Once your data is no longer needed, we will securely delete or anonymize it.
              </p>
            </section>

            {/* Cookies */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-normal text-[#616161] mb-4">Cookies</h2>
              <p className="text-justify text-[#616161]">
                We use cookies to enhance your browsing experience. A cookie is a small file stored on your device that helps us remember your preferences, analyze site usage, and improve functionality. You can control cookies through your browser settings, but disabling cookies may affect your ability to use certain features of the site.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-normal text-[#616161] mb-4">Children&apos;s Privacy</h2>
              <p className="text-justify text-[#616161]">
                Our site is not intended for children under the age of 13, and we do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child under 13, we will take steps to delete that information.
              </p>
            </section>

            {/* Changes to This Privacy Policy */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-normal text-[#616161] mb-4">Changes to This Privacy Policy</h2>
              <p className="text-justify text-[#616161]">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the &#34;Effective Date&rdquo; at the top will be updated. We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage