import classes from './interior.module.scss';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import interiorConfig from '@config/interior.config';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classNames from '@/shared/lib/classNames';

export const Interior = () => {
    return (
        <div className={classes.interior}>
            <Swiper
                modules={[Navigation, Pagination]}
                centeredSlides={true}
                initialSlide={0}
                spaceBetween={15}
                navigation={{
                    nextEl: '.arrow-next',
                    prevEl: '.arrow-prev',
                }}
                breakpoints={{
                    320: { slidesPerView: 1.3 },
                    426: { slidesPerView: 2 },
                    769: { slidesPerView: 2.4 },
                    993: { slidesPerView: 4 },
                    1600: { slidesPerView: 6 },
                }}
                pagination={{
                    clickable: true,
                    el: '.pagination',
                }}
                className={classes.swiper}
            >
                {interiorConfig.map((img) => (
                    <SwiperSlide className={classes.slide}>
                        <img src={img} alt="img" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={classes.control}>
                <div
                    className={classNames(classes.arrow, {}, ['arrow-prev'])}
                ></div>

                <div
                    className={classNames(classes.pagination, {}, [
                        'pagination',
                    ])}
                ></div>
                <div
                    className={classNames(classes.arrow, {}, [
                        classes.next,
                        'arrow-next',
                    ])}
                ></div>
            </div>
        </div>
    );
};
