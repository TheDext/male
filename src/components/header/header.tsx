import classes from './header.module.scss';
import useMatchMedia from '@/core/hooks/useMatchMedia';
import { DesktopHeader } from '@/components/desktopHeader';
import { MobileHeader } from '@/components/mobileHeader';
import {useEffect} from "react";
import { useWindowScroll } from 'react-use';
import classNames from "@/shared/lib/classNames";

export const Header = () => {
    const { isDesktop } = useMatchMedia();
    const { y } = useWindowScroll();

    useEffect(() => {
        console.log("y", y)
    }, [y]);
    return (
        <header className={classNames(classes.header, {[classes._nonTransparent]: y > 100}, [])}>
            {isDesktop ? <DesktopHeader /> : <MobileHeader />}
        </header>
    );
};
