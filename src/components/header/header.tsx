import classes from './header.module.scss';
import useMatchMedia from '@/core/hooks/useMatchMedia';
import { DesktopHeader } from '@/components/desktopHeader';
import { MobileHeader } from '@/components/mobileHeader';

export const Header = () => {
    const { isDesktop } = useMatchMedia();
    return (
        <header className={classes.header}>
            {isDesktop ? <DesktopHeader /> : <MobileHeader />}
        </header>
    );
};
