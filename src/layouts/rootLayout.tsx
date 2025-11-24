import { MainScreen } from '@/components/mainScreen';
import { Welcome } from '@/components/welcome';
import { ParallaxProvider } from 'react-scroll-parallax';
import {Header} from "@/components/header";

const RootLayout = () => {
    return (
        <>
            <Header />
            <MainScreen />
            <ParallaxProvider>
                <Welcome />
            </ParallaxProvider>
        </>
    );
};

export default RootLayout;
