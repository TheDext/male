import { MainScreen } from '@/components/mainScreen';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Header } from '@/components/header';
import { Services } from '@/components/services';
import { Interior } from '@/components/interior';
import { About } from '@/components/about';

const RootLayout = () => {
    return (
        <>
            <Header />
            <MainScreen />
            <ParallaxProvider>
                <About />
            </ParallaxProvider>
            <Services />
            {/*<Interior />*/}
        </>
    );
};

export default RootLayout;
