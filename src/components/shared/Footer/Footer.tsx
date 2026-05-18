import React from "react";
import Link from "next/link";
import Image from "next/image";
import NewsletterSubscribe from "./NewsletterSubscribe";
import { Mail } from "lucide-react";
import { SiFacebook } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-white border-t border-[#8E959F]/50">
      <div className="py-10 md:py-12 lg:py-14 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-5 md:gap-6 lg:gap-6">
        <div className="md:col-span-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/images/logo.jpg"
              alt="logo"
              width={1000}
              height={1000}
              className="w-[222px] h-[66px] object-cover"
            />
          </Link>

          {/* <div className="pt-6 md:pt-8 lg:pt-12 flex items-center gap-3">
            <Link
              href="https://www.facebook.com/profile.php?id=61583972953701"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex border-[2px] border-[#131313] p-2 md:p-3 rounded-full ">
                <Facebook className="text-[#131313]" />
              </span>
            </Link>
            <Link 
            href="https://www.instagram.com/analytic_soccer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex border-[2px] border-[#131313] p-2 md:p-3 rounded-full ">
                <Instagram className="text-[#131313]" />
              </span>
            </Link>
          </div> */}

          <div className="pt-6 md:pt-8 lg:pt-10 flex items-center gap-4 pb-6 md:pb-8 lg:pb-12">
            {/* Facebook */}
            <Link
              href="https://www.facebook.com/profile.php?id=61583972953701"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex border-[2px] border-[#1877F2] p-2  rounded-full">
                <SiFacebook className="text-[#1877F2] w-7 h-7" />
              </span>
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/analytic_soccer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex border-[2px] border-[#E1306C] p-2  rounded-full">
                <FaSquareInstagram className="text-[#E1306C] w-7 h-7" />
              </span>
            </Link>
          </div>

          {/*brand Logo */}
          <Link href="https://geniusdatasport.com" target="_blank" className="flex items-center gap-2">
            <Image
              src="/assets/images/footer_logo.jpg"
              alt="logo"
              width={1000}
              height={1000}
              className="w-[222px] h-[66px] object-cover rounded-[12px]"
            />
          </Link>
        </div>

        <div className="md:col-span-3">
          {/* <h4 className="hidden md:block text-lg md:text-xl font-normal text-[#131313] leading-[120%] pb-4 md:pb-6 lg:pb-8">
            General website FAQ
          </h4> */}
           <Link href="/faq">
              <p className="text-sm lg:text-base xl:text-lg font-normal text-[#131313] leading-[120%] hover:underline hover:text-primary pb-4 md:pb-6 lg:pb-8">
                
                General website FAQ
              </p>
            </Link>
          <ul>
            <Link href="/contact-us/#about-us">
              <li className="text-sm lg:text-base xl:text-lg font-normal text-[#131313] leading-[120%] hover:underline hover:text-primary">
                About Us
              </li>
            </Link>
            {/* <Link href="/about-us">
              <li className="text-sm lg:text-base xl:text-lg font-normal text-[#131313] leading-[120%] hover:underline hover:text-primary py-3 md:py-4">About Us</li>
            </Link> */}
            <Link href="/contact-us">
              <li className="text-sm lg:text-base xl:text-lg font-normal text-[#131313] leading-[120%] hover:underline hover:text-primary py-4">
                Contact Us
              </li>
            </Link>
            <Link href="/player-evaluation-program-faq">
              <li className="text-sm lg:text-base xl:text-lg font-normal text-[#131313] leading-[120%] hover:underline hover:text-primary">
                
                Player Evaluation Program FAQ
              </li>
            </Link>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="hidden md:block text-lg md:text-xl font-normal text-[#131313] leading-[120%] pb-4 md:pb-6 lg:pb-8">
            Other Links
          </h4>
          <ul>
            <Link href="/terms-of-use">
              <li className="text-sm lg:text-base xl:text-lg font-normal text-[#131313] leading-[120%] hover:underline hover:text-primary">
                Terms Of Use
              </li>
            </Link>
            <Link href="/privacy-policy">
              <li className="text-sm lg:text-base xl:text-lg font-normal text-[#131313] leading-[120%] hover:underline hover:text-primary py-4">
                Privacy Policy
              </li>
            </Link>
            
          </ul>
          <p className=" text-sm lg:text-base xl:text-lg leading-[120%] text-[#131313] hover:text-primary font-normal ">
            {/* <strong className='text-[#131313]'>Email :</strong>  */}
            <Link
              href="mailto:info@analyticsoccer.com"
              className="hover:font-semibold flex items-center gap-2"
            >
              <Mail className="w-5 h-5" /> info@analyticsoccer.com
            </Link>
          </p>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-lg md:text-xl font-semibold leading-[120%] text-[#131313] pb-3 lg:pb-4">
            Subscribe To Our <span className="text-primary">NEWSLETTER</span>
          </h4>
          <div className="">
            <NewsletterSubscribe />
                {/*brand Logo */}
         <div className="pt-8 md:pt-10 lg:pt-12 xl:pt-14 w-full flex items-center justify-center">
           <Link href="#" target="_blank" >
            <Image
              src="/assets/images/spl.png"
              alt="logo"
              width={1000}
              height={1000}
              className="w-[100px] h-[86px] object-cover rounded-[12px]"
            />
          </Link>
         </div>
          </div>
          


        </div>
      </div>
      {/* footer bottom  */}
      <p className="container text-sm lg:text-base xl:text-lg font-normal text-center text-[#131313] leading-[120%] pb-4 ">
        @ {new Date().getFullYear()}. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
