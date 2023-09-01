import Image from "next/image"
import goggle from "../assets/google.png"
const Signin = () => {
  return (
    <div>  <div className="mt-2">
    
    <form>
      <div className="sm:mb-6 mb-4">
        <label className="mb-2 text-base">
          Name<sup>*</sup>
        </label>
        <input
          className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%]  border-[1px] border-[#000000] rounded-lg"
          type="text"
        />
      </div>
      <div className="sm:mb-6 mb-4">
        <label className="mb-2 text-base">
          Email<sup>*</sup>
        </label>
        <input
          className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%]  border-[1px] border-[#000000] rounded-lg"
          type="text"
        />
      </div>
      <div className="sm:mb-6 mb-4">
        <label className="mb-2 text-base">
          Password<sup>*</sup>
        </label>
        <input
          className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%]  border-[1px] border-[#000000] rounded-lg"
          type="text"
        />
      </div>
      <div className="">
        <button className="w-[100%] text-lg h-[48px] bg-[#181818] text-white rounded mb-4">
          Sign Up
        </button>
        <button className="w-[100%] flex justify-center gap-[11px] items-center text-lg h-[48px] border-[1px] border-[#181818] text-[#181818] rounded ">
          <Image src={goggle} width={16} height={16} alt="google" />
      <h5>    Sign Up with Google</h5>
        </button>
      </div>
      <h5 className="sm:mt-8 mt-6 text-center text-base">
        Already have an account? <a href="#" className="underline">Login</a>
      </h5>
    </form>
  </div></div>
  )
}

export default Signin