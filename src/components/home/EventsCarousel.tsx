// import { useEffect } from "react";
// import Swiper from "swiper";
// import { Navigation, Pagination, Parallax, Mousewheel, Autoplay } from 'swiper/modules';
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./EventsCarousel.css";

// const slides = [
//   { image: "/assets/images/events/DSC_4727.JPG", title: "IEEE AGM", overlay: "overlay-dark" },
//   { image: "/assets/images/events/DSC_4733.JPG", title: "Prakashan", overlay: "overlay-dark" },
//   { image: "/assets/images/events/DSC_3510.JPG", title: "Ambassodors Summit", overlay: "overlay-light" },
//   { image: "/assets/images/events/IMG_20240626_115301.jpg", title: "Rural Outreach", overlay: "overlay-dark" },
//   { image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d", title: "Blue Adobe MAX", overlay: "overlay-dark" },
//   { image: "https://images.unsplash.com/photo-1535350356005-fd52b3b524fb", title: "Carved Wood", overlay: "overlay-dark" }
// ];


// const EventsCarousel = () => {
//   useEffect(() => {
//     const swiper = new Swiper(".swiper-container-h", {
//       modules: [Navigation, Pagination, Parallax, Mousewheel, Autoplay],
//       speed: 1500,
//       autoplay: {
//         delay: 5000,
//       },
//       parallax: true,
//       mousewheel: true,
//       loop: true,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     });

//     return () => {
//       swiper.destroy();
//     };
//   }, []);


// return (
//   <>
//     <h2 className="events-title" >
//       Upcoming Events
//     </h2>
//     <section className="creative-showcase--slider">
//       <div className="swiper swiper-container-h">
//         <div className="swiper-wrapper">
//           {slides.map((slide, index) => (
//             <div key={index} className="swiper-slide">
//               <div
//                 className={`slide-bg ${slide.overlay}`}
//                 style={{ backgroundImage: `url(${slide.image})` }}
//                 data-swiper-parallax="-200"
//               >
//                 <div className="slide-container">
//                   <div className="slider-content">
//                     <h6 className="slide-subtitle" data-swiper-parallax="-100">
//                       © Creative Showcase
//                     </h6>
//                     <h1 className="slide-heading">
//                       {slide.title.split(" ").map((word, i) => (
//                         <span key={i} data-swiper-parallax={-200 * (i + 1)}>
//                           {word} <br />
//                         </span>
//                       ))}
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="swiper-pagination"></div>
//       </div>
//     </section>
//   </>
// );
// };

// export default EventsCarousel;

import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Parallax, Mousewheel, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import "./EventsCarousel.css";

const slides = [
  { image: "/assets/images/events/DSC_3510.JPG", title: "IEEE AGM", overlay: "overlay-light" },
  { image: "/assets/images/events/IMG_20240626_115301.jpg", title: "Rural Outreach", overlay: "overlay-dark" },
  { image: "/assets/images/events/Arduino_Odyssey_3.jpeg", title: "Arduino Odyssey", overlay: "overlay-dark" },
  { image: "/assets/images/events/PRAKASHAN_1.jpg", title: "Prakashan", overlay: "overlay-dark" },
  { image: "/assets/images/events/DSC_4727.JPG", title: "Ambassadors Summit", overlay: "overlay-light" },
  { image: "/assets/images/events/Innovation_Oasis_1.jpg", title: "Innovation Oasis", overlay: "overlay-dark" }
];

const EventsCarousel = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container-h", {
      modules: [Navigation, Pagination, Parallax, Mousewheel, Autoplay],
      speed: 3500,
      autoplay: {
        delay: 700,
      },
      parallax: true,
      // mousewheel: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <>
      <div className ="header">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="events-heading"
          >
            Events &amp; Activities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="events-description"
          >
            Stay updated with our latest events and join us in our journey of innovation
          </motion.p>

        </div>  
          

      {/* Slider Section */}
      <section className="creative-showcase--slider">
        <div className="swiper swiper-container-h">
          <div className="swiper-wrapper">
            {slides.map((slide, index) => (
              <div key={index} className="swiper-slide">
                <div
                  className={`slide-bg ${slide.overlay}`}
                  style={{ backgroundImage: `url(${slide.image})` }}
                  data-swiper-parallax="-40"
                >
                  <div className="slide-container">
                    <div className="slider-content">
                      <h6 className="slide-subtitle" data-swiper-parallax="-100">
                        © JCER IEEE
                      </h6>
                      <h1 className="slide-heading">
                        {slide.title.split(" ").map((word, i) => (
                          <span key={i} data-swiper-parallax={-200 * (i + 1)}>
                            {word} <br />
                          </span>
                        ))}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>
    </>
  );
};

export default EventsCarousel;













// All done here!