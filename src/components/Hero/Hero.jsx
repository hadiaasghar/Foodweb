import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[650px] '>
        {/*text section */}
        <div className='flex flex-col gap-4 text-center md:text-left justify-center pt-24 mb:p-0 pb-10'>
            <h1 className='font-semibold text-3xl'>Delicious Food Is Wating For You</h1>
            <p className=' '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi rerum impedit perspiciatis eaque labore beatae maiores facere, quam quos! Ea ipsum odit eos consectetur distinctio similique dolor debitis. Sit, tempora!</p>
            <div className='flex gap-4 items-center md:justify-'>
                <button className='primary-btn hover:scale-105 duration-200'>FoodMenu</button>
                <button className='secondary-btn hover:scale-105 duration-200'>BookTable</button>
            </div>

        </div>
           {/*image section */}
           <div className=' flex flex-col justify-center'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8qML_yetTu86Vut9VPEjJbSeI8zeHxKzlg&s"  className="image-shadow max-w-[500px] rounded-full bg-slate-100 w-[340px] md:w-[600px] mx-auto md:mx-0 animate-spin-slow" />
           </div>

    </div>
    
    </>
  )
}

export default Hero
