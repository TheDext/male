import { MainScreen } from '@/components/mainScreen';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Header } from '@/components/header';
import { Services } from '@/components/services';
import { Interior } from '@/components/interior';
import { About } from '@/components/about';
import { Masters } from '@/components/masters';
import { Cosmetics } from '@/components/cosmetics';
import { Certificates } from '@/components/certificates';
import { MasterClasses } from '@/components/masterClasses';
import { Contacts } from '@/components/contacts';
import { Footer } from '@/components/footer';

const RootLayout = () => {
    return (
        <>
            <Header />
            <MainScreen />
            <ParallaxProvider>
                <About />
            </ParallaxProvider>
            <Services />
            <Interior />
            <Masters />
            <Cosmetics />
            <Certificates />
            <MasterClasses />
            <Contacts />
            <Footer />
        </>
    );
};

export default RootLayout;
