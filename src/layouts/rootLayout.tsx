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
import { useEffect, useState } from 'react';
import { BuyModal } from '@/components/buyModal';
import { bodyLock } from '@/shared/lib/bodyLock';

const RootLayout = () => {
    const [showBueModal, setShowBueModal] = useState(false);
    useEffect(() => {
        if (showBueModal) {
            bodyLock.enable();
        } else {
            bodyLock.disable();
        }
    }, [showBueModal]);
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
            <Cosmetics setShowBueModal={setShowBueModal} />
            <Certificates setShowBueModal={setShowBueModal} />
            <MasterClasses />
            <Contacts />
            <Footer />
            {showBueModal && <BuyModal setShowBueModal={setShowBueModal} />}
        </>
    );
};

export default RootLayout;
