import classes from './header.module.scss';
import useMatchMedia from '@/core/hooks/useMatchMedia';
import { DesktopHeader } from '@/components/desktopHeader';

export const Header = () => {
    const { isDesktop } = useMatchMedia();
    return (
        <header className={classes.header}>
            {isDesktop ? <DesktopHeader /> : 'Mobile Header'}
        </header>
    );
};
