import { MainScreen } from '@/components/mainScreen';
import { Welcome } from '@/components/welcome';
import { ParallaxProvider } from 'react-scroll-parallax';

const RootLayout = () => {
    return (
        <>
            <MainScreen />
            <ParallaxProvider>
                <Welcome />
            </ParallaxProvider>
        </>
    );
};

export default RootLayout;
