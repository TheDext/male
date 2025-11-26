import classes from './interior.module.scss';
import { Navigation, Pagination } from 'swiper/modules';
import img1 from '@img/interior/01.png';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Interior = () => {
    const slides = [img1, img1, img1, img1, img1, img1];
    return (
        <div className="swiper-center-container">
            <Swiper
                modules={[Navigation, Pagination]}
                centeredSlides={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                }}
            >
                {slides.map((img) => (
                    <SwiperSlide>
                        <img src={img} alt="img" />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/*/!* Кастомные стрелки *!/*/}
            {/*<div className="swiper-button-prev"></div>*/}
            {/*<div className="swiper-button-next"></div>*/}

            {/*/!* Пагинация *!/*/}
            {/*<div className="swiper-pagination"></div>*/}
        </div>
    );
};
