import React from 'react'

const Banner = () => {
  return (
    <>
    <div className='container py-14'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center'>
            {/*image section*/}
            <div className='flex justify-center'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSILXK-70ad-mm_IYZAzVILxId2BbnTd71EHw&s" className='w-80 h-80 md:w-[500px] md:h-[350px] rounded-3xl'/></div>
               {/*text section*/}
               <div className='flex flex-col justify-center'>

                <h1 className='text-3xl font-semibold'>Food is always good</h1>
                <p className='py-4 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci consequuntur repudiandae, similique laborum sit quae blanditiis culpa at, laudantium odio, perferendis nobis explicabo vel totam. Impedit est repellendus quod?</p>
               </div>


            
        </div>
      
    </div>
    </>
  )
}

export default Banner
