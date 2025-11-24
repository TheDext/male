import classes from './subtitle.module.scss';

export const Subtitle = ({ children }: { children: string }) => {
    return <div className={classes.subtitle}>{children}</div>;
};
