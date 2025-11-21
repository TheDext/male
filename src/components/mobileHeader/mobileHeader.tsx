import classes from './mobileHeader.module.scss';
import { BurgerIcon } from '@/components/burgerIcon/burgerIcon';
import { useState } from 'react';
import { Logo } from '@/components/logo';
import { AppButton, ButtonVariants } from '@/components/shared';

import { MobileMenu } from '@/components/mobileMenu/mobileMenu';
import classNames from '@/shared/lib/classNames';

export const MobileHeader = () => {
    const [showMenu, setShowMenu] = useState(false);

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
                    <AppButton variant={ButtonVariants.WHITE_NON_RADIUS}>
                        Записаться
                    </AppButton>
                </div>
            </div>
            {showMenu && (
                <div className={classes.menu}>
                    <MobileMenu />
                </div>
            )}
        </div>
    );
};
