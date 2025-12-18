import classes from './mastersItem.module.scss';
import { AppButton, ButtonVariants } from '@/components/shared/appButton';
import { useIntersection } from 'react-use';
import { useEffect, useRef, useState } from 'react';
import classNames from '@/shared/lib/classNames';

export const MastersItem = ({ item }) => {
    const { img, name, position, description } = item;
    const [showDescription, setShowDescription] = useState(false);
    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: 0.85,
    });

    useEffect(() => {
        if (intersection && intersection.intersectionRatio > 0.85) {
            setShowDescription(true);
        } else {
            setShowDescription(false);
        }
    }, [intersection]);

    return (
        <div
            className={classNames(
                classes.mastersItem,
                { [classes._show]: showDescription },
                []
            )}
            ref={intersectionRef}
        >
            <div className={classes.img}>
                <img src={img} alt="master" />
            </div>

            <div className={classes.info}>
                <div className={classes.name}>{name}</div>
                <div className={classes.position}>{position}</div>
                <div className={classes.description}>{description}</div>
                <AppButton variant={ButtonVariants.GOLD_RADIUS}>
                    <div className={classes.btnContent}>
                        <div className={classes.arrow}></div>
                        <span>Записаться</span>
                    </div>
                </AppButton>
            </div>
        </div>
    );
};
