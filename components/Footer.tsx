import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-white absolute z-10 shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] ">
      <footer className="Footer mx-auto max-w-[1440px] flex flex-col sm:gap-4 sm:px-16 px-4 py-[32px] text-[14px] text-[#393A32]">
        <div className="Content justify-around gap-12 sm:gap-2 flex flex-wrap ">
          <div className="Left sm:w-96 w-[100%] sm:mr-24">
            <div className="flex flex-col gap-4">
              <Link href="/" className="Logo">
                <h5 className="font-bold text-[18px] cursor-pointer">LOGO</h5>
              </Link>
              <p className="P">
                We do more than just design tasks and job boards, subscribe to our newsletter to get access to our resources and more from us.
              </p>
              <div className="gap-4 inline-flex">
                <div className="w-full h-full border-[1px] border-[#F4F4F4] rounded-[8px] pl-3 shadow-[0_1px_2px_0px_rgba(0,0,0,0.1)]">
                  <input className="w-full h-12 outline-none justify-center" type="text" placeholder="Enter email here"/>
                </div>
                <button className="Button w-22 h-12 px-6 py-3 bg-neutral-900 rounded border border-neutral-900 justify-center items-center gap-2">
                  <div className="SubmitDesign text-white">Subscribe</div>
                </button>
              </div>
            </div>
          </div>
          <div className="Right  justify-between grid sm:grid-cols-3 grid-cols-2 ">
            <div className="NoName ">
              <div className="NoName font-bold">No Name</div>
              <div className="FooterLinks ">
                <Link href="/aboutUs">
                  <div className="AboutUs">About Us</div>
                </Link>
                <Link href="/whatWeDo">
                  <div className="WhatWeDo ">What We do</div>
                </Link>
                <Link href="/ourTeam">
                  <div className="OurTeam ">Our Team</div>
                </Link>
                <Link href="/aboutUs">
                  <div className="NeedATeam ">Hire Us</div>
                </Link>
                <Link href="/agency">
                  <div className="Agency ">Agency</div>
                </Link>
              </div>
            </div>

            <div className="Services">
              <div className="Services font-bold">Services</div>
              <div className="FooterLinks ">
                <Link href="/designTasks">
                  <div className="DesignTasks ">Design Tasks</div>
                </Link>
                <Link href="/codingTasks">
                  <div className="CodingTasks ">Coding Tasks</div>
                </Link>
                <Link href="/jobBoards">
                  <div className="JobBoards ">Job boards</div>
                </Link>
                <Link href="/community">
                  <div className="Community cursor-pointer ">Community</div>
                </Link>
                <Link href="/blog">
                  <div className="Blog cursor-pointer ">Blog</div>
                </Link>
              </div>
            </div>

            <div className="ReachUs ">
              <div className="ReachUs font-bold">Reach us?</div>
              <div className="FooterLinks ">
                <Link href="/ourShop">
                  <div className="OurShop ">Our Shop</div>
                </Link>
                <Link href="/merchandise">
                  <div className="MerchMerchandise ">Merch & Merchandise</div>
                </Link>
                <Link href="/newsletter">
                  <div className="Newsletter ">Newsletter</div>
                </Link>
                <Link href="/adsSpace">
                  <div className="AdsSpace ">Ads Space</div>
                </Link>
                <Link href="/donate">
                  <div className="Donate ">Donate</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="Buttom my-8">
          <div className="Divider self-stretch h-px bg-stone-700" />
          <div className="Content sm:justify-between justify-center flex flex-wrap mt-8 gap-8 ">
            <div className="Socials flex flex-row sm:justify-center gap-6">
              <Link href="https://twitter.com/avioflagos" >
                <FaTwitter size={24} className="icon" />
              </Link>
              <Link href="https://www.linkedin.com/in/avioflagos/" >
                <FaLinkedin size={24} className="icon" />
              </Link>
              <Link href ="https://github.com/avioflagos" >
                <FaGithub size={24} className="icon" />
              </Link>
            </div>
            <div className="Credits items-center gap-8 flex flex-wrap justify-center">
              <div className="FooterLinks gap-6 flex flex-row">
                <div className="PrivacyPolicy text-stone-700 text-sm font-normal underline ">Privacy Policy</div>
                <div className="TermsOfService text-stone-700 text-sm font-normal underline  ">Terms of Service</div>
                <div className="CookiesSettings text-stone-700 text-sm font-normal underline  ">Cookies Settings</div>
              </div>
              <div className="AviDesignAllRightReserved text-stone-700 text-smfont-normal "> <span className="font-bold">2023 Avi.Design</span> All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  ); 
};

export default Footer;
