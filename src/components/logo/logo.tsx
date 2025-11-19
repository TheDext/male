import classes from './logo.module.scss';

export const Logo = () => {
    return (
        <div className={classes.logo}>
            <div className={classes.secondary}>Стрижки</div>
            <div className={classes.primary}>
                <div className={classes.pre}>MA</div>
                <div className={classes.post}>LE</div>
            </div>
            <div className={classes.secondary}>Бритьё</div>
        </div>
    );
};
