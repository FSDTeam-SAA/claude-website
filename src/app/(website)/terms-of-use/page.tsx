import React from 'react'

const TermsOfUsePage = () => {
  return (
    <div>
        <div className="container py-10 md:py-14 lg:py-[72px]">
      <div className="">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] mb-4">
            Terms & Conditions
          </h1>
        </div>

        <div className="space-y-6 text-base font-normal leading-[120%] text-[#a0a0a0]">

          {/* Introduction */}
          <section className="space-y-4">
            <p className="text-justify text-[#616161]">
              Welcome to Dimond. By accessing and using our website <span className="text-[#4dabf7]">dripswag.com</span> and purchasing our products, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully. If you do not agree to these terms, please do not use the site or make a purchase.
            </p>
          </section>

          {/* Eligibility */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-normal text-[#131313]">Eligibility</h2>
            <p className="text-justify text-[#616161]">
              You must be at least 18 years old and legally able to enter into contracts to use our site. By using the site, you represent and warrant that you meet these eligibility requirements.
            </p>
          </section>

          {/* Account Registration */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-normal text-[#131313]">Account Registration</h2>
            <p className="text-justify text-[#616161]">To participate in auctions and place bids, you must create an account on our site. When registering, you agree to:</p>
            <ul className="list-disc pl-8 space-y-3">
              <li className="text-justify text-[#616161]">Provide accurate and complete information during the registration process.</li>
              <li className="text-justify text-[#616161]">Maintain the confidentiality of your account credentials and notify us immediately of any unauthorized access to your account.</li>
              <li className="text-justify text-[#616161]">Be responsible for all activity under your account, even if you have not directly authorized it.</li>
            </ul>
          </section>

          {/* Auctions & Bidding */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-normal text-[#131313]">Auctions & Bidding</h2>
            <ul className="list-disc pl-8 space-y-3">
              <li className="text-justify text-[#616161]"><strong>Auction Process:</strong> Auctions on our site are conducted in real-time or at scheduled times, depending on the auction type. You can place bids on items listed by sellers.</li>
              <li className="text-justify text-[#616161]"><strong>Bidding Rules:</strong> By placing a bid, you are making a legally binding offer to purchase the item. If you have the highest bid when the auction ends, you are required to complete the purchase.</li>
              <li className="text-justify text-[#616161]"><strong>Bid Cancellation:</strong> Once a bid is placed, it cannot be canceled or withdrawn. If you are the winning bidder, you are obligated to pay the bid amount.</li>
              <li className="text-justify text-[#616161]"><strong>Reserve Price:</strong> Some items may have a reserve price. If the highest bid does not meet the reserve price, the item will not be sold.</li>
            </ul>
          </section>

          {/* Winning Bid and Payment */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-normal text-[#131313]">Winning Bid and Payment</h2>
            <ul className="list-disc pl-8 space-y-3">
              <li className="text-justify text-[#616161]"><strong>Payment:</strong> If you win an auction, you agree to pay the bid amount plus any applicable taxes, fees, and shipping costs. Payments must be made through the methods specified on the site.</li>
              <li className="text-justify text-[#616161]"><strong>Failure to Pay:</strong> If you fail to make the required payment within the specified time, we may cancel the transaction, and you may be subject to penalties, including being banned from future auctions.</li>
            </ul>
          </section>

          {/* Fees */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-normal text-[#131313]">Fees</h2>
            <ul className="list-disc pl-8 space-y-3">
              <li className="text-justify text-[#616161]"><strong>Listing Fees:</strong> Sellers may be required to pay a fee to list an item for auction on our site. These fees are outlined in our fee schedule available on the site.</li>
              <li className="text-justify text-[#616161]"><strong>Transaction Fees:</strong> We may charge a transaction fee for successful auctions, which will be specified at the time of the auction.</li>
            </ul>
          </section>

          {/* Seller Responsibilities */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-normal text-[#131313]">Seller Responsibilities</h2>
            <ul className="list-disc pl-8 space-y-3">
              <li className="text-justify text-[#616161]"><strong>Item Description:</strong> Sellers must provide accurate and honest descriptions of the items they list for auction, including clear details about condition, defects, and authenticity.</li>
              <li className="text-justify text-[#616161]"><strong>Shipping:</strong> Sellers are responsible for shipping the items to the winning bidder within the timeframe specified on the site.</li>
              <li className="text-justify text-[#616161]"><strong>Returns and Disputes:</strong> Sellers must adhere to our return policy and resolve any disputes related to their items in a fair and timely manner.</li>
            </ul>
          </section>

          {/* Prohibited Activities */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-normal text-[#131313]">Prohibited Activities</h2>
            <p className="text-justify text-[#616161]">You agree not to:</p>
            <ul className="list-disc pl-8 space-y-3">
              <li className="text-justify text-[#616161]">Violate any applicable laws or regulations.</li>
              <li className="text-justify text-[#616161]">Engage in fraudulent activities, such as placing fake bids, creating multiple accounts to manipulate auction outcomes, or misrepresenting items for sale.</li>
              <li className="text-justify text-[#616161]">Interfere with or disrupt the site’s functionality or security.</li>
              <li className="text-justify text-[#616161]">Use our site for any illegal or harmful purposes.</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-normal text-[#131313]">Intellectual Property</h2>
            <p className="text-justify text-[#616161]">
              Ownership: All content on the site, including text, graphics, logos, images, and software, is the property of [Your Website Name] or our licensors and is protected by intellectual property laws.
            </p>
            <p className="text-justify text-[#616161]">
              Limited License: We grant you a limited, non-exclusive, non-transferable license to access and use the site for its intended purpose.
            </p>
          </section>

          {/* Privacy */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-normal text-[#131313]">Privacy</h2>
            <p className="text-justify text-[#616161]">
              Your use of the site is also governed by our <a href="/privacy-policy" className="text-[#4dabf7] underline">Privacy Policy</a>, which outlines how we collect, use, and protect your personal information.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-normal text-[#131313]">Limitation of Liability</h2>
            <p className="text-justify text-[#616161]">
              To the fullest extent permitted by law, [Your Website Name] shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the site or any transactions conducted through the site.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-normal text-[#131313]">Dispute Resolution</h2>
            <p className="text-justify text-[#616161]">
              Any disputes arising out of or related to these terms and your use of the site will be resolved through binding arbitration in accordance with the laws of [Your country/state]. You agree to waive the right to participate in class actions, class arbitrations, or any other proceedings involving multiple parties.
            </p>
          </section>

          {/* Termination */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-normal text-[#131313]">Termination</h2>
            <p className="text-justify text-[#616161]">
              We reserve the right to suspend or terminate your access to the site at our discretion, without notice, for violations of these terms or any other reason. If your account is terminated, any outstanding transactions or obligations will remain enforceable.
            </p>
          </section>

          {/* Changes to These Terms */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-normal text-[#131313]">Changes to These Terms</h2>
            <p className="text-justify text-[#616161]">
              We may update these Terms from time to time. The most current version will always be available on this page. By continuing to use the site after changes are posted, you agree to be bound by the updated Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-normal text-[#131313]">Governing Law</h2>
            <p className="text-justify text-[#616161]">
              These Terms are governed by and construed in accordance with the laws of [Your country/state]. Any legal action or proceeding related to these Terms shall be brought in the competent courts located in [Jurisdiction].
            </p>
          </section>

        </div>
      </div>
    </div>
    </div>
  )
}

export default TermsOfUsePage