import classes from './masters.module.scss';
import classNames from '@/shared/lib/classNames';
import mastersConfig from '@config/masters.config';
import { Title } from '@/components/shared/title';
import { MastersItem } from '@/components/mastersItem';

export const Masters = () => {
    const { title, masters } = mastersConfig;
    const { dariya, anastasiya, elizaveta, vaselina, victoriya } = masters;

    return (
        <div className={classes.masters} id="masters">
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
