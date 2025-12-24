import classes from './subtitle.module.scss';
import { useInView } from 'react-intersection-observer';
import classNames from '@/shared/lib/classNames';

export const Subtitle = ({ children, meta = false }: { children: string }) => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return meta ? (
        <h3
            ref={ref}
            className={classNames(
                classes.subtitle,
                { [classes._inView]: inView },
                []
            )}
        >
            {children}
        </h3>
    ) : (
        <div
            ref={ref}
            className={classNames(
                classes.subtitle,
                { [classes._inView]: inView },
                []
            )}
        >
            {children}
        </div>
    );
};
