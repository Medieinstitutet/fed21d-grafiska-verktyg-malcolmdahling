import './SectionA.scss';

export function SectionA(){

    return(
        <section className="sectionA">
            <h2 className="heading">MOONTRIBE - <span>a mystical place where LUXURY meets the JUNGLE and plays with ART</span></h2>

            <p className="paragraph">
                Reconnection takes on a new meaning in 
                a place where nature, art, and luxury coexist. 
                This sanctuary welcomes all who wish to
                find peace in a space blessed with magical 
                surroundings.
            </p>
            
            <input className="readMore" type="button" value="READ MORE"></input>

            <div>
                <img className="img0" src={require('../../images/0.jpg')}></img>
                <img className="img1" src={require('../../images/1.jpg')}></img>
            </div>
            
        </section>
    );
}