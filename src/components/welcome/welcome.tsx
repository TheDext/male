import classes from './welcome.module.scss';
import { welcomeConfig } from '@config/welcome.config';
import { useParallax } from 'react-scroll-parallax';

export const Welcome = () => {
    const { welcomeSubtext, welcomeText, title, subtitle, items, bgImg } =
        welcomeConfig;

    const { ref: bgRef } = useParallax({
        speed: -40, // Двигается медленнее (вверх при скролле вниз)
    });
    const { ref: welcome01 } = useParallax({
        speed: 30, // Двигается медленнее (вверх при скролле вниз)
    });

    return (
        <div className={classes.welcome}>
            <div className="_container-default">
                <div className={classes.body}>
                    <div className={classes.welcomeText}>{welcomeText}</div>
                    <div className={classes.welcomeSubtext}>
                        {welcomeSubtext}
                    </div>
                    <div className={classes.title}>{title}</div>
                    <div className={classes.subtitle}>{subtitle}</div>

                    <div className={classes.row} ref={welcome01}>
                        {items.map(({ id, title, img, description }) => (
                            <div className={classes.column} key={id}>
                                <div className={classes.item}>
                                    <div className={classes.itemTitle}>
                                        {title}
                                    </div>
                                    <img src={img} alt="barberImg" />
                                    <div className={classes.itemDescription}>
                                        {description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={classes.bgImageWrapper} ref={bgRef}>
                <div className={classes.bgImage}>
                    <img src={bgImg} alt="headImg" />
                </div>
            </div>
        </div>
    );
};
