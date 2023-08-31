
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
        <button className="w-[100%] text-lg h-[48px] border-[1px] border-[#181818] text-[#181818] rounded mb-4">
          Sign Up with Google
        </button>
      </div>
      <h5 className="sm:mt-8 mt-6 text-center text-base">
        Already have an account? <a>Login</a>
      </h5>
    </form>
  </div></div>
  )
}

export default Signin