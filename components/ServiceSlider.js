// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';

// import{ FreeMode, Pagination } from 'swiper';
import Slider from "react-slick";

import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket } from 'react-icons/rx'

// data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const ServiceSlider = () => {
  return (
    <div>{serviceData.map((item,index)=>{
      return(
        <>
        <div key={index} className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
          <div>{item.icon}</div>
          <div>
            <div>{item.title}</div>
            <div>{item.description}</div>
          </div>
        </div>
        </>
      )
    })}
    
    </div>
    // <Swiper 
    // breakpoints={{
    //   320: {
    //     slidesPerView: 1,
    //     spaceBetween: 15,
    //   },

    //   640: {
    //     slidesPerView: 3,
    //     spaceBetween: 15,
    //   },
    // }}
    // freeMode={true}
    // pagination={{
    //   clickable: true
    // }}  
    // modules={[FreeMode, Pagination]}
    // className='h-[240px] sm:h-[340px]'
    // >
    //   Service Slider</Swiper>
    );
};

export default ServiceSlider;
