// import './App.css';
// import NavBar from './components/navbar/NavBar';
// import ImageSlider from './components/imageslider/ImageSlider';

// function App() {
//   const slides = [
//     {
//       url: 'http://localhost:3000/hcm.jpg',
//       title: 'HCM',
//     },
//     {
//       url: 'http://localhost:3000/hoian.jpg',
//       title: 'Hoi An',
//     },
//     {
//       url: 'http://localhost:3000/lehoi.jpg',
//       title: 'Le hoi',
//     },
//     {
//       url: 'http://localhost:3000/tet.jpg',
//       title: 'Tet',
//     },
//     {
//       url: 'http://localhost:3000/van.jpg',
//       title: 'Van',
//     },
//   ];
//   return (
//     <div className="overflow-y-auto overflow-x-hidden h-screen px-5 py-8 bg-white">
//       <NavBar />
//       <div className="w-full h-1/3 mx-auto my-0">
//         <ImageSlider slides={slides} />
//       </div>
//     </div>
//   );
// }

// export default App;

// import { IoIosArrowDropleftCircle } from 'react-icons/io';
// import { IoIosArrowDroprightCircle } from 'react-icons/io';
// import { BsFillCircleFill } from 'react-icons/bs';

// import { useCallback, useEffect, useRef, useState } from 'react';

// const slideStyles = {
//   height: '100%',
//   width: '100%',
//   borderRadius: '10px',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
// };

// const ImageSlider = ({ slides }) => {
//   const timerRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToNext = useCallback(() => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   }, [currentIndex, slides]);

//   const goToslide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   const getSlideStylesWithBackground = {
//     ...slideStyles,
//     backgroundImage: `url(${slides[currentIndex].url})`,
//   };

//   useEffect(() => {
//     if (timerRef.current) {
//       clearTimeout(timerRef.current);
//     }
//     timerRef.current = setTimeout(() => {
//       goToNext();
//     }, 2000);

//     return () => clearTimeout(timerRef.current);
//   }, [goToNext]);

//   return (
//     <div className="h-full relative">
//       <div>
//         <IoIosArrowDropleftCircle
//           className="text-white absolute top-[45%] left-8 -translate-x-4 cursor-pointer z-20"
//           onClick={goToPrevious}
//           size={'2.5rem'}
//         />
//         <BsFillCircleFill
//           className="text-black absolute top-[45%] left-8 -translate-x-3 translate-y-1/4 z-10"
//           size={'1.75rem'}
//         />
//       </div>

//       <div>
//         <IoIosArrowDroprightCircle
//           className="text-white absolute top-[45%] right-8 translate-x-4 cursor-pointer z-20"
//           onClick={goToNext}
//           size={'2.5rem'}
//         />
//         <BsFillCircleFill
//           className="text-black absolute top-[45%] right-8 translate-x-3 translate-y-1/4 z-10"
//           size={'1.75rem'}
//         />
//       </div>

//       <div style={getSlideStylesWithBackground}></div>

//       <div className="flex justify-center">
//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             className="mt-2.5 mx-1 cursor-pointer"
//             size={'0.5rem'}
//             onClick={() => goToslide(slideIndex)}
//           >
//             <BsFillCircleFill />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
