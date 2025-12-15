import classes from './cardItem.module.scss';
import { AppButton, ButtonVariants } from '@/components/shared/appButton';
import { useState } from 'react';
import TextTruncate from 'react-text-truncate';

export const CardItem = ({ id, img, description, name, price }) => {
    const [show, setShow] = useState([]);

    return (
        <div className={classes.item}>
            <img src={img} alt="cosmetic" />
            <div className={classes.body}>
                <div className={classes.name}>{name}</div>
                <div className={classes.description}>
                    <TextTruncate
                        line={show.includes(id) ? 100 : 3}
                        element="div"
                        truncateText="..."
                        text={description}
                        onClick={() =>
                            setShow((prevState) => [...prevState, id])
                        }
                    />
                </div>

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
