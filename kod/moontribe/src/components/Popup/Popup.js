import { useEffect, useState } from 'react';
import './Popup.scss';

export function Popup(){

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowPopup(true);
        }, 60000);
    },[]);

    

    return(

        <>
            {showPopup &&
                
                <div className="popup">

                    <div className="x" onClick={() => {setShowPopup(false)}}></div>

                    <h3>Still not convinced?</h3>

                    <p>We  want to offer you the best of stays. Be the first to know about the offers and experiences  that MOONTRIBE has for you</p>

                    <form>
                        <input type="text" placeholder="YOUR EMAIL"></input>
                        <input type="checkbox" name="terms"></input>
                        <label htmlFor="terms">Terms & Conditions</label>
                        <input type="button" value="SEND" disabled></input>
                    </form>
                </div>
            }
        </>
    );
}

