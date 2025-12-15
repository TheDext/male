import classes from './mastersItem.module.scss';
import { AppButton, ButtonVariants } from '@/components/shared/appButton';

export const MastersItem = ({ item }) => {
    const { img, name, position, description } = item;

    return (
        <div className={classes.mastersItem}>
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
