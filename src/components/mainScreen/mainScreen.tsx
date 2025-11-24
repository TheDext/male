import classes from './mainScreen.module.scss';
import { Header } from '@/components/header';
import { BgVideo } from '@/components/bgVideo';
import { MainScreenPromo } from '@/components/mainScreenPromo';

export const MainScreen = () => {
    return (
        <div className={classes.mainScreen}>
            <MainScreenPromo />

            <BgVideo />
        </div>
    );
};
