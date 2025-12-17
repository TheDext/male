import classes from './masterClasses.module.scss';
import { Title } from '@/components/shared/title';
import masterClassesConfig from '@config/masterClasses.config';
import { AppVideo } from '@/components/appVideo';

export const MasterClasses = () => {
    const { title, subtitle, items } = masterClassesConfig;

    return (
        <div className={classes.masterClasses}>
            <div className="_container-large">
                <Title>{title}</Title>
                <div className={classes.subtitle}>{subtitle}</div>
                <div className={classes.row}>
                    {items.map(({ id, name, note, video }) => (
                        <div key={id} className={classes.column}>
                            <div className={classes.item}>
                                <div className={classes.video}>
                                    <AppVideo video={video} />
                                </div>
                                <div className={classes.bodyWrapper}>
                                    <div className={classes.body}>
                                        <div className={classes.name}>
                                            {name}
                                        </div>
                                        <div className={classes.note}>
                                            {note}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
