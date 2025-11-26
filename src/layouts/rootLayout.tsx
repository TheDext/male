import { MainScreen } from '@/components/mainScreen';
import { Welcome } from '@/components/welcome';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Header } from '@/components/header';
import { Services } from '@/components/services';
import { Interior } from '@/components/interior';

const RootLayout = () => {
    return (
        <>
            <Header />
            <MainScreen />
            <ParallaxProvider>
                <Welcome />
            </ParallaxProvider>
            <Services />
            <Interior />
        </>
    );
};

export default RootLayout;
