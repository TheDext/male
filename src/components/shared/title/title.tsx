import classes from './title.module.scss';
import { useInView } from 'react-intersection-observer';
import classNames from '@/shared/lib/classNames';

export const Title = ({ children }: { children: string }) => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <div
            ref={ref}
            className={classNames(
                classes.title,
                { [classes._inView]: inView },
                []
            )}
        >
            {children}
        </div>
    );
};
