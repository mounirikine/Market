import React from 'react'

const HeaderTop = () => {
  return (
    <>
    <header className='flex justify-between items-center px-5 py-2 drop-shadow-xl'>
    <div className="w-5/12  gap-2 items-center flex px-10 ">
    <i class="ri-phone-line"></i>
    <span className='border-r-2 border-black pr-8'>+011 2233 4545</span>

    <i class="ri-mail-line ml-5"></i>
    <span>company@domail.info</span>
    </div>
    <div className="w-5/12 flex">
    
    <div>
    <i class="ri-refresh-line ml-5"></i>
    <span className='border-r-2 border-black pr-8'>Compare</span>
    </div>
   
    <div>
    <i class="ri-group-line ml-5"></i>
    <span className='border-r-2 border-black pr-8'>US</span>
    </div>
    <div>
    <i class="ri-money-dollar-circle-line ml-5"></i>
    <span className='border-r-2 border-black pr-8'>USD</span>
    </div>

    </div>
    </header>
    </>
  )
}

export default HeaderTop