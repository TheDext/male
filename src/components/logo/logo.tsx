import classes from './logo.module.scss';
import { Link } from 'react-router';
import { useInView } from 'react-intersection-observer';
import classNames from '@/shared/lib/classNames';

export const Logo = () => {
    const { ref, inView } = useInView({
        threshold: 0.3,
    });

    return (
        <Link
            to="/"
            className={classNames(
                classes.logo,
                { [classes._inView]: inView },
                []
            )}
            ref={ref}
        >
            <div className={classes.secondary}>Стрижки</div>
            <div className={classes.primary}>
                <div className={classes.pre}>MA</div>
                <div className={classes.post}>LE</div>
            </div>
            <div className={classes.secondary}>Бритьё</div>
        </Link>
    );
};
