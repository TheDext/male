import classes from './subtitle.module.scss';
import { useInView } from 'react-intersection-observer';
import classNames from '@/shared/lib/classNames';

export const Subtitle = ({ children }: { children: string }) => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
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
