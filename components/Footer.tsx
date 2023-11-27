

const Footer = () => {
  return (
    <div className="w-full bg-white  z-10 shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)]  ">
      <footer className="Footer mx-auto max-w-[1440px] flex flex-col sm:gap-4 sm:px-16 px-4 py-[32px] text-[14px] text-[#393A32]">
    
            <div className="Credits items-center gap-8 flex flex-wrap justify-center">
              <div className="FooterLinks gap-6 flex flex-row">
                <div className="PrivacyPolicy text-stone-700 text-sm font-normal underline ">Privacy Policy</div>
                <div className="TermsOfService text-stone-700 text-sm font-normal underline  ">Terms of Service</div>
                <div className="CookiesSettings text-stone-700 text-sm font-normal underline  ">Cookies Settings</div>
              </div>
              <div className="AviDesignAllRightReserved text-stone-700 text-smfont-normal "> <span className="font-bold">2023 Avi.Design</span> All rights reserved.</div>
            </div>
          
      
      </footer>
    </div>
  ); 
};

export default Footer;
