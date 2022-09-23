import './NotFound.scss';

export function NotFound(){

    const bodyScrollLock = require('body-scroll-lock');
    const disableBodyScroll = bodyScrollLock.disableBodyScroll;
    disableBodyScroll('body');

    return(
        <>
            <img className="notFoundImg" src={require('../../images/NotFound.webp')}></img>
        </>
    );
}