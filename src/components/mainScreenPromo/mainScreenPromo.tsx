import classes from './mainScreenPromo.module.scss';
import { AppButton, ButtonVariants } from '@/components/shared';
import { mainScreePromoConfig } from '@config/mainScreePromo.config';

export const MainScreenPromo = () => {
    const { img, price, preText, btnText, postText } = mainScreePromoConfig;

    return (
        <div className={classes.promo}>
            <div className={classes.row}>
                <div>{preText}</div>
                <img src={img} alt="mustache" />
                <div>{postText}</div>
            </div>
            <div className={classes.price}>
                от <span>{price}</span> ₽
            </div>
            <AppButton variant={ButtonVariants.GOLD_NON_RADIUS}>
                {btnText}
            </AppButton>
        </div>
    );
};
