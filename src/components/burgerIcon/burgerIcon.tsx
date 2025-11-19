import classes from './burgerIcon.module.scss';
import classNames from '@/shared/lib/classNames';

type BurgerIconProps = {
    setShowMenu: () => void;
    isActive: boolean;
};

export const BurgerIcon = ({ setShowMenu, isActive }: BurgerIconProps) => {
    return (
        <div className={classes.wrapper}>
            <div
                onClick={setShowMenu}
                className={classNames(
                    classes.burger,
                    { [classes._active]: isActive },
                    []
                )}
            >
                <div className={classes.line}></div>
            </div>
        </div>
    );
};
