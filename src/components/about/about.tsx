import classes from './about.module.scss';
import { Title } from '@/components/shared/title';
import { Subtitle } from '@/components/shared/subtitle';
import { aboutConfig } from '@config/about.config';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import classNames from '@/shared/lib/classNames';

export const About = () => {
    const { welcomeSubtext, welcomeText, subtitle, items } = aboutConfig;
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <div
            ref={ref}
            className={classNames(
                classes.about,
                { [classes._inView]: inView },
                []
            )}
            id="about"
        >
            <div className="_container-default">
                <div className={classes.body}>
                    <div>
                        <Title>{welcomeText}</Title>
                    </div>
                    <div>
                        <Subtitle>{welcomeSubtext}</Subtitle>
                    </div>

                    <h2 className={classes.title}>
                        <div className={classes.titleBold}>MA</div>
                        <div className={classes.titleDefault}>LE</div>
                    </h2>
                    <h2 className={classes.subtitle}>{subtitle}</h2>

                    <div className={classes.row}>
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
        </div>
    );
};
