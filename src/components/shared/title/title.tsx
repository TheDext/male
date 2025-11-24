import classes from './title.module.scss';

export const Title = ({ children }: { children: string }) => {
    return <div className={classes.title}>{children}</div>;
};
