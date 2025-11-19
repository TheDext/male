import classes from './actions.module.scss';
import { Link } from 'react-router';
import phone from '@icons/phone.png';
import { AppButton, ButtonVariants } from '@/components/shared';

export const Actions = () => {
    return (
        <div className={classes.actions}>
            <Link to="tel:89779105053" className={classes.phoneLink}>
                <img src={phone} alt="phone" className={classes.phone} />
                8-977-910-50-53
            </Link>
            {/*<Link className={classes.actions} to="tel:89779105053">*/}
            {/*    <img src={yc} alt="yclients" className={classes.yc} />*/}
            {/*</Link>*/}
            <Link to="#">
                <AppButton variant={ButtonVariants.WHITE_NON_RADIUS}>
                    Записаться
                </AppButton>
            </Link>
        </div>
    );
};
