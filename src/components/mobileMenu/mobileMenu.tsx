import classes from './mobileMenu.module.scss';
import { Nav } from '@/components/nav';
import { Actions } from '@/components/actions/actions';

export const MobileMenu = ({ setShowMenu }) => {
    return (
        <div className={classes.mobileMenu}>
            <Nav setShowMenu={setShowMenu} />
            <Actions />
        </div>
    );
};
