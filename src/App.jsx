// import React from 'react'
// import Navbar from './components/Navbar/Navbar'
// import Hero from './components/Hero/Hero'
// import TopList from './components/TopList/TopList'
// // import BgImage from './assets/BgImage/cover.jpg'
// // const bgStyle = {
// //   // backgroundImage:`url(${BgImage})`,
// //   // backgroundRepeat:"no-repeat",
// //   // backgroundSize:"cover",
// //   // backgroundPosition:"center",
  
// // }


// const App = () => {
//   return (
//     <>
//     <div>
//       <img src="https://images.pexels.com/photos/19247580/pexels-photo-19247580/free-photo-of-close-up-of-a-burger-french-fries-and-a-drink.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
//     </div>
   
//     <div className='overflow-x-hidden'>
      
//       <Navbar/>
//       <Hero/>
//       <TopList/>
      
//     </div>
//     </>
//   )
// }

// export default App



import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TopList from './components/TopList/TopList'
import Banner from './components/Banner/Banner';
import OverServices from './components/OverServices/OverServices';

const bgStyle = {
  backgroundImage: "url('https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=600')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100vh",
};

const App = () => {
  return (
    <>
      <div style={bgStyle} className="overflow-x-hidden">
        <div className='min-h-screen bg-white/50 backdrop-blur-1xl'>
        <Navbar />
        <Hero />
        <TopList />
        <Banner/>
        <OverServices/>
        </div>
      </div>
    </>
  );
}

export default App;
