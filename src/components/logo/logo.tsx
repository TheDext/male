import classes from './logo.module.scss';
import classNames from '@/shared/lib/classNames';

export const Logo = ({ size }: { size: string }) => {
    return (
        <div className={classNames(classes.logo, {}, [size])}>
            <div className={classes.pre}>MA</div>
            <div className={classes.post}>LE</div>
        </div>
    );
};
