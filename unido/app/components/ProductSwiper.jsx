import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';


import img1 from '../../public/swiperimg1.jpg';
import img2 from '../../public/swiperimg2.png';
import img3 from '../../public/swiperimg3.jpg';
import img4 from '../../public/swiperimg4.jpg';
import img6 from '../../public/swiperimg6.png';
import img7 from '../../public/swiperimg7.jpg';
import Image from 'next/image';
import styles from '../styles/home.module.scss';

const ProductSwiper = () => {
  return (
 
      <div className={styles.swiper_container}>
        <Swiper className={styles.swipersBox}
        
       spaceBetween={-70}
          slidesPerView={3}
          navigation
          speed={2000}
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            0:{
              slidesPerView: 1,
              spaceBetween:20
            },
            569:{
              slidesPerView: 2,
              spaceBetween: 20,
            },
            769:{
              slidesPerView: 3,
              spaceBetween: 10,
            }

          }}
        >
            
            <SwiperSlide className={styles.singleSlide}>
            <div className={styles.imgPart}>
              <Image className={styles.innerImg} src={img1} width={360} height={250} alt="Slide 1" />
            </div>
            <div className={styles.slideDesc}>
                <h3>La Cosecha</h3>
                <p>La Cosecha Union Market District
                1280 4th St NE, Washington, DC 20002, USA
                Monday to Sunday 7am - 7pm
                </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.singleSlide}>
            <div className={styles.imgPart}>
              <Image className={styles.innerImg} src={img2} width={360} height={250} alt="Slide 2" />
            </div>
            <div className={styles.slideDesc}>
                <h3>La Cosecha</h3>
                <p>La Cosecha Union Market District
                1280 4th St NE, Washington, DC 20002, USA
                Monday to Sunday 7am - 7pm
                </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.singleSlide}>
            <div className={styles.imgPart}>
              <Image className={styles.innerImg} src={img3} width={360} height={250} alt="Slide 3" />
            </div>
            <div className={styles.slideDesc}>
                <h3>La Cosecha</h3>
                <p>La Cosecha Union Market District
                1280 4th St NE, Washington, DC 20002, USA
                Monday to Sunday 7am - 7pm
                </p>
            </div>
          </SwiperSlide >
          <SwiperSlide className={styles.singleSlide}>
            <div className={styles.imgPart}>
              <Image className={styles.innerImg} src={img4} width={360} height={250} alt="Slide 4" />
            </div>
            <div className={styles.slideDesc}>
                <h3>La Cosecha</h3>
                <p>La Cosecha Union Market District
                1280 4th St NE, Washington, DC 20002, USA
                Monday to Sunday 7am - 7pm
                </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.singleSlide}>
          <div className={styles.imgPart}>
              <Image className={styles.innerImg} src={img6} width={360} height={250} alt="Slide 4" />
            </div>
            <div className={styles.slideDesc}>
                <h3>La Cosecha</h3>
                <p>La Cosecha Union Market District
                1280 4th St NE, Washington, DC 20002, USA
                Monday to Sunday 7am - 7pm
                </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.singleSlide}>
          <div className={styles.imgPart}>
              <Image className={styles.innerImg} src={img7} width={360} height={250} alt="Slide 4" />
            </div>
            <div className={styles.slideDesc}>
                <h3>La Cosecha</h3>
                <p>La Cosecha Union Market District
                1280 4th St NE, Washington, DC 20002, USA
                Monday to Sunday 7am - 7pm
                </p>
            </div>
          </SwiperSlide>
       
        
       
        </Swiper>
      </div>
   
  );
};

export default ProductSwiper;
