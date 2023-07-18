//latest

import Slider from "react-slick";
import { BsArrowRight } from "react-icons/bs";

// data
export const workSlides = [
  {
    images: [
      {
        title: "title",
        path: "/thumb1.jpg",
      },
      {
        title: "title",
        path: "/thumb2.jpg",
      },
      {
        title: "title",
        path: "/thumb3.jpg",
      },
      {
        title: "title",
        path: "/thumb4.jpg",
      },
    ],
  },
  {
    images: [
      {
        title: "title",
        path: "/thumb4.jpg",
      },
      {
        title: "title",
        path: "/thumb1.jpg",
      },
      {
        title: "title",
        path: "/thumb2.jpg",
      },
      {
        title: "title",
        path: "/thumb3.jpg",
      },
    ],
  },
];

const WorkSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <BsArrowRight />,
  };

  return (
        <Slider {...settings} className="h-[280px] sm:h-[480px]">
      {workSlides.map((slides, index) => {
        return (
          <div key={index}>
            {slides.images.map((image, imageIndex) => {
              return (
                <div key={imageIndex}>
                  <img className="slider-image height={30px} width={50px} " src={image.path} alt={image.title} />
                </div>
              );
            })}
          </div>
        );
      })}
    </Slider>

  );
};

export default WorkSlider;





// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper';

// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/Pagination';

// import {BsArrowRight} from 'react-icons/bs';
// // data
// export const workSlides = {
//   slides: [
//     {
//       images: [
//         {
//           title: 'title',
//           path: '/thumb1.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb2.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb3.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb4.jpg',
//         },
//       ],
//     },
//     {
//       images: [
//         {
//           title: 'title',
//           path: '/thumb4.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb1.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb2.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb3.jpg',
//         },
//       ],
//     },
//   ],
// };

// const WorkSlider = () => {
//   return (
//     <Swiper spaceBetween={10} pagination={{
//       clickable:true,
//     }}
//     modules={[Pagination]}
//     className='h-[280px] sm:h-[480px]'>
//       {workSlides.slides.map((slides, index)=>{
//         return(
//           <SwiperSlide key={index}>
//             <div>

//             </div>
//           </SwiperSlide>
//         );
//       })}

//     </Swiper>
//     );
// };

// export default WorkSlider;

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper';

// import 'swiper/css';
// import 'swiper/css/swiper.css';
// import 'swiper/css/free-mode.css';
// import 'swiper/css/pagination.css';

// import { BsArrowRight } from 'react-icons/bs';

// // data
// export const workSlides = {
//   slides: [
//     {
//       images: [
//         {
//           title: 'title',
//           path: '/thumb1.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb2.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb3.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb4.jpg',
//         },
//       ],
//     },
//     {
//       images: [
//         {
//           title: 'title',
//           path: '/thumb4.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb1.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb2.jpg',
//         },
//         {
//           title: 'title',
//           path: '/thumb3.jpg',
//         },
//       ],
//     },
//   ],
// };

// const WorkSlider = () => {
//   return (
//     <Swiper spaceBetween={10} pagination={{
//       clickable: true,
//       renderBullet: function (index, className) {
//         return '<span class="' + className + '">' + (index + 1) + '</span>';
//       },
//     }}
//     className='swiper-container h-[280px] sm:h-[480px]'>
//       {workSlides.slides.map((slides, index) => {
//         return (
//           <SwiperSlide key={index}>
//             <div></div>
//           </SwiperSlide>
//         );
//       })}
//     </Swiper>
//   );
// };

// export default WorkSlider;
