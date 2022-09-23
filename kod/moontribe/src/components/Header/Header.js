import { useState } from 'react';
import { Cookies } from '../Cookies/Cookies';
import { Menuu } from '../Menu/Menuu';
import './Header.scss';

export function Header(){

    const [scrollClass, setScrollClass] = useState('');
    const [showMenu, setShowMenu] = useState(false);


    let scrollTimer = null;

    window.addEventListener('scroll', () => {

        setScrollClass('topBarMoveUp');

        if(scrollTimer !== null){
            clearTimeout(scrollTimer);
        }

        scrollTimer = setTimeout(() => {

            setTimeout(() => {
                setScrollClass('topBarMoveDown');
    
            }, 500);

        }, 500);
        
    }, false);


    function toggleMenu(){
        setShowMenu(!showMenu);
    }



    return(
        <>
            <header>

                <div className={"topBar " + scrollClass}>
                    <div className="menuButton" onClick={toggleMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <div className="bookNow">
                        <p>BOOK NOW</p>
                    </div>
                </div>

                <div className='logo'></div>

                <Cookies></Cookies>

            </header>

            {showMenu && <Menuu></Menuu>}
        </>
    );
}