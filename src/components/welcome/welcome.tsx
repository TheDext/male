import classes from './welcome.module.scss';
import { welcomeConfig } from '@config/welcome.config';
import { useParallax } from 'react-scroll-parallax';
import { Title } from '@/components/shared/title';
import { Subtitle } from '@/components/shared/subtitle';

export const Welcome = () => {
    const { welcomeSubtext, welcomeText, title, subtitle, items, bgImg } =
        welcomeConfig;

    const { ref: bgRef } = useParallax<HTMLDivElement>({
        speed: -40,
    });
    const { ref: rowRef } = useParallax<HTMLDivElement>({
        speed: 30,
    });
    const { ref: titleRef } = useParallax<HTMLDivElement>({
        translateX: [-5, 0],
        opacity: [0, 1],
    });
    const { ref: subtitleRef } = useParallax<HTMLDivElement>({
        translateX: [-10, 0],
        opacity: [0, 1],
    });
    const { ref: welcomeTextRef } = useParallax<HTMLDivElement>({
        translateX: [5, 0],
        opacity: [0, 1],
    });
    const { ref: welcomeSubtextRef } = useParallax<HTMLDivElement>({
        translateX: [10, 0],
        opacity: [0, 1],
    });

    return (
        <div className={classes.welcome}>
            <div className="_container-default">
                <div className={classes.body}>
                    <div ref={welcomeTextRef}>
                        <Title>{welcomeText}</Title>
                    </div>
                    <div ref={welcomeSubtextRef}>
                        <Subtitle>{welcomeSubtext}</Subtitle>
                    </div>
                    <div className={classes.title} ref={titleRef}>
                        {title}
                    </div>
                    <div className={classes.subtitle} ref={subtitleRef}>
                        {subtitle}
                    </div>

                    <div className={classes.row} ref={rowRef}>
                        {items.map(({ id, title, img, description }) => (
                            <div className={classes.column} key={id}>
                                <div className={classes.item}>
                                    <div className={classes.itemTitle}>
                                        {title}
                                    </div>
                                    <img
                                        src={img}
                                        alt="barberImg"
                                        className={classes.itemImg}
                                    />
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
