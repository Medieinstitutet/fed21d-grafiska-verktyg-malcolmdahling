import { useEffect, useState } from 'react';
import { RoomA } from './Rooms/RoomA';
import { RoomB } from './Rooms/RoomB';
import { RoomC } from './Rooms/RoomC';
import './SectionB.scss';

export function SectionB(){

    
    const [screenWidth, setScreenWidth] = useState(0);
    const [currentRoom, setCurrentRoom] = useState(0)

    useEffect(() => {
        setScreenWidth( Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) );
    },[]);

    //for testing only. causes heavy load on the cpu
    // window.addEventListener('resize', e => {
    //     setScreenWidth( Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) );
    //     console.log(screenWidth);
    // });


    function changeRoom(direction){
        
        if(direction === 'backward'){
            
            if(currentRoom === 0){
                setCurrentRoom(2);
            }

            else{
                setCurrentRoom(currentRoom-1);
            }
        }

        else{
            if(currentRoom === 2){
                setCurrentRoom(0);
            }

            else{
                setCurrentRoom(currentRoom+1);
            }
        }
    }

    return(
        <section className="sectionB">
            <h2>OUR ROOMS</h2>

            {(screenWidth >= 835 &&
                <>
                    <RoomA></RoomA>
                    <RoomB></RoomB>
                    <RoomC></RoomC>
                </>)

                ||

                (<>
                    <input type="button" value="<" className="changeRoomButton buttonLeft" onClick={ () => {changeRoom('backward')} }></input>
                    <input type="button" value=">" className="changeRoomButton buttonRight" onClick={ () => {changeRoom('forward')} }></input>
                    
                    {currentRoom === 0 && <RoomA></RoomA>}
                    {currentRoom === 1 && <RoomB></RoomB>}
                    {currentRoom === 2 && <RoomC></RoomC>}
                </>)
            }

        </section>
    );
}