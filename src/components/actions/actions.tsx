import classes from './actions.module.scss';
import { Link } from 'react-router';
import yc from '@img/yc.png';
import { AppButton, ButtonVariants } from '@/components/shared';

export const Actions = () => {
    return (
        <div className={classes.actions}>
            <Link className={classes.actions} to="tel:89779105053">
                8-977-910-50-53
            </Link>
            <Link className={classes.actions} to="tel:89779105053">
                <img src={yc} alt="yclients" className={classes.yc} />
            </Link>
            <Link to="#">
                <AppButton variant={ButtonVariants.WHITE_NON_RADIUS}>
                    Записаться
                </AppButton>
            </Link>
        </div>
    );
};
