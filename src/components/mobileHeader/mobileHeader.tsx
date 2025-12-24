import classes from './mobileHeader.module.scss';
import { BurgerIcon } from '@/components/burgerIcon/burgerIcon';
import { useEffect, useState } from 'react';
import { Logo } from '@/components/logo';
import { MobileMenu } from '@/components/mobileMenu/mobileMenu';
import classNames from '@/shared/lib/classNames';
import { bodyLock } from '@/shared/lib/bodyLock';
import { AppButton, ButtonVariants } from '@/components/shared/appButton';
import { Link } from 'react-router';

export const MobileHeader = () => {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        if (showMenu) {
            bodyLock.enable();
        } else {
            bodyLock.disable();
        }
    }, [showMenu]);

    return (
        <div className={classes.mobileHeader}>
            <div className="_container-default">
                <div
                    className={classNames(
                        classes.row,
                        { [classes._active]: showMenu },
                        []
                    )}
                >
                    <BurgerIcon
                        setShowMenu={() =>
                            setShowMenu((prevState) => !prevState)
                        }
                        isActive={showMenu}
                    />
                    <Logo />
                    <Link to="https://n519183.yclients.com/company/491124/personal/menu?o=">
                        <AppButton
                            variant={ButtonVariants.WHITE_NON_RADIUS}
                            additionalStyles={classes.btn}
                        >
                            Записаться
                        </AppButton>
                    </Link>
                </div>
            </div>
            {showMenu && (
                <div className={classes.menu}>
                    <MobileMenu setShowMenu={setShowMenu} />
                </div>
            )}
        </div>
    );
};
