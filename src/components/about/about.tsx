import classes from './about.module.scss';
import { Title } from '@/components/shared/title';
import { Subtitle } from '@/components/shared/subtitle';
import { aboutConfig } from '@config/about.config';

export const About = () => {
    const { welcomeSubtext, welcomeText, subtitle, items } = aboutConfig;
    return (
        <div className={classes.about}>
            <div className="_container-default">
                <div className={classes.body}>
                    <div>
                        <Title>{welcomeText}</Title>
                    </div>
                    <div>
                        <Subtitle>{welcomeSubtext}</Subtitle>
                    </div>
                    <div className={classes.title}>
                        <div className={classes.titleBold}>MA</div>
                        <div className={classes.titleDefault}>LE</div>
                    </div>
                    <div className={classes.subtitle}>{subtitle}</div>

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
