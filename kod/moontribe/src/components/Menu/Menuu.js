import { useState } from 'react';
import './Menuu.scss';

export function Menuu(){ //"Menu" seems to be a restriced word

    const [homeHover, setHomeHover] = useState(false);
    const [aboutHover, setAboutHover] = useState(false);
    const [roomsHover, setRoomsHover] = useState(false);
    const [eventsHover, setEventsHover] = useState(false);
    const [healingHover, setHealingHover] = useState(false);
    const [gastHover, setGastHover] = useState(false);
    const [artHover, setArtHover] = useState(false);
    const [pressHover, setPressHover] = useState(false);
    const [contHover, setContHover] = useState(false);
    const [qaHover, setQaHover] = useState(false);

    return(
        <>
            <div className="menu">
                <h2>MOONTRIBE</h2>

                <nav>
                    <ul>
                        <li><a href="/" onMouseEnter={() => {setHomeHover(true)}} onMouseLeave={() => {setHomeHover(false)}}>{!homeHover && '> '}HOME{homeHover && ' >'}</a></li>
                        <li><a href="/" onMouseEnter={() => {setAboutHover(true)}} onMouseLeave={() => {setAboutHover(false)}}>{!aboutHover && '> '}ABOUT{aboutHover && ' >'}</a></li>
                        <li><a href="/" onMouseEnter={() => {setRoomsHover(true)}} onMouseLeave={() => {setRoomsHover(false)}}>{!roomsHover && '> '}OUR ROOMS{roomsHover && ' >'}</a></li>
                        <li><a href="/" onMouseEnter={() => {setEventsHover(true)}} onMouseLeave={() => {setEventsHover(false)}}>{!eventsHover && '> '}EVENTS{eventsHover && ' >'}</a></li>
                        <li><a href="/" onMouseEnter={() => {setHealingHover(true)}} onMouseLeave={() => {setHealingHover(false)}}>{!healingHover && '> '}HEALING{healingHover && ' >'}</a></li>
                        <li><a href="/" onMouseEnter={() => {setGastHover(true)}} onMouseLeave={() => {setGastHover(false)}}>{!gastHover && '> '}GASTRONOMY{gastHover && ' >'}</a></li>
                        <li><a href="/" onMouseEnter={() => {setArtHover(true)}} onMouseLeave={() => {setArtHover(false)}}>{!artHover && '> '}ART{artHover && ' >'}</a></li>

                        <br></br>

                        <li><a href="/" onMouseEnter={() => {setPressHover(true)}} onMouseLeave={() => {setPressHover(false)}}>{!pressHover && '> '}PRESS{pressHover && ' >'}</a></li>
                        <li><a href="/" onMouseEnter={() => {setContHover(true)}} onMouseLeave={() => {setContHover(false)}}>{!contHover && '> '}CONTACT{contHover && ' >'}</a></li>
                        <li><a href="/" onMouseEnter={() => {setQaHover(true)}} onMouseLeave={() => {setQaHover(false)}}>{!qaHover && '> '}Q&A{qaHover && ' >'}</a></li>
                    

                    </ul>
                </nav>
            </div>
            
            <div className="overlay"></div>
        </>
    );
}