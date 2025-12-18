import classes from './mainScreenPromo.module.scss';
import { mainScreePromoConfig } from '@config/mainScreePromo.config';
import { AppButton, ButtonVariants } from '@/components/shared/appButton';

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
            <a href="#services">
                <AppButton variant={ButtonVariants.GOLD_NON_RADIUS}>
                    {btnText}
                </AppButton>
            </a>
        </div>
    );
};
