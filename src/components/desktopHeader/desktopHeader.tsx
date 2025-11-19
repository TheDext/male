import { Nav } from '@/components/nav';
import { Logo } from '@/components/logo';
import classes from './desktopHeader.module.scss';
import { Actions } from '@/components/actions/actions';

export const DesktopHeader = () => {
    return (
        <div className={classes.desktopHeader}>
            <div className={'_container-large'}>
                <div className={classes.row}>
                    <Nav />
                    <div className={classes.logo}>
                        <Logo size={'s'} />
                    </div>
                    <Actions />
                </div>
            </div>
        </div>
    );
};
