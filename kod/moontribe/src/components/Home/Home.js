import { SectionA } from '../SectionA/SectionA';
import { SectionB } from '../SectionB/SectionB';
import { SectionC } from '../SectionC/SectionC';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './Home.scss';
import { Popup } from '../Popup/Popup';

export function Home(){

    const bodyScrollLock = require('body-scroll-lock');
    const enableBodyScroll = bodyScrollLock.enableBodyScroll;
    enableBodyScroll('body');

    return(
        <>
            <Header></Header>

            <main>
                <SectionA></SectionA>
                <SectionB></SectionB>
                <SectionC></SectionC>
            </main>

            <Popup></Popup>

            <Footer></Footer>
        </>
    );
}