import React from 'react'

const NewsLetter = () => {
  return (
    <>
    <div className="w-5/12 items center px-32">
          <h1 className="text-5xl font-semibold ">Newsletter</h1>
          <h3 className="text-lg py-4">
            Sign Up for get all update news & Get{" "}
            <span className="text-blue-600">15% off</span>
          </h3>
        </div>
        <div className="w-5/12 flex gap-1 justify-center items center">
          <input
            type="email"
            placeholder=" Enter your email"
            class="block w-[80%] outline-none rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <button className="bg-orange-500 text-white px-5 rounded-lg">
            Submit
          </button>
        </div>
    </>
  )
}

export default NewsLetter