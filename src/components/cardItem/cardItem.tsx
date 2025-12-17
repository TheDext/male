import classes from './cardItem.module.scss';
import { AppButton, ButtonVariants } from '@/components/shared/appButton';
import { useState } from 'react';

export const CardItem = ({ img, description, name, price }) => {
    const [show, setShow] = useState([]);

    return (
        <div className={classes.item}>
            <img src={img} alt="cosmetic" />
            <div className={classes.body}>
                <div className={classes.name}>{name}</div>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{price}</div>
                <div className={classes.btn}>
                    <AppButton variant={ButtonVariants.WHITE_NON_RADIUS}>
                        Купить
                    </AppButton>
                </div>
            </div>
        </div>
    );
};
