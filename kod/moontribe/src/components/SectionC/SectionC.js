import './SectionC.scss';

export function SectionC(){

    return(
        <section className="sectionC">

            <div className="parallax"></div>
            
            <div className="textDiv">
                <h2>PRIVATE EVENTS</h2>
                <h3>UNFORGETTABLE, HABITUALLY ROMANTIC</h3>

                <p>
                    Special occasions deserve a unique setting.
                    We invite you to gather with your tribe in a magical space that will make any event memorable.
                    Celebrations of any kind are welcome to a place where you will be able to reconnect and rejoice with your people in an otherworldly venue.
                </p>

                <input type="button" value="PLAN YOUR EVENT"></input>

            </div>

                
            <div className="imgContainer">
                <img className="imgLeft" src={require('../../images/6.jpg')} alt="candles?"></img>
                <img className="imgRight" src={require('../../images/7.jpg')} alt="table"></img>
            </div>

        </section>
    );
}