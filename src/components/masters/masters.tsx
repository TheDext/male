import classes from './masters.module.scss';
import classNames from '@/shared/lib/classNames';
import mastersConfig from '@config/masters.config';
import { Title } from '@/components/shared/title';
import { MastersItem } from '@/components/mastersItem';
import { useInView } from 'react-intersection-observer';

export const Masters = () => {
    const { title, masters } = mastersConfig;
    const { dariya, anastasiya, elizaveta, vaselina, victoriya } = masters;
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <div
            ref={ref}
            className={classNames(
                classes.masters,
                { [classes._inView]: inView },
                []
            )}
            id="masters"
        >
            <div className="_container-large">
                <Title>{title}</Title>
                <div className={classes.row}>
                    <div
                        className={classNames(classes.column, {}, [
                            classes.column1,
                        ])}
                    >
                        <MastersItem item={dariya} />
                    </div>
                    <div
                        className={classNames(classes.column, {}, [
                            classes.column2,
                        ])}
                    >
                        <MastersItem item={anastasiya} />
                        <MastersItem item={elizaveta} />
                    </div>
                    <div
                        className={classNames(classes.column, {}, [
                            classes.column3,
                        ])}
                    >
                        <MastersItem item={vaselina} />
                        <MastersItem item={victoriya} />
                    </div>
                </div>
            </div>
        </div>
    );
};
