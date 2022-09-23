import './Footer.scss';

export function Footer(){

    return(
        <footer>
            <section>
                <h2><span>follow</span> THE TRIBE</h2>

                <div className="icons">
                    <img src={require('../../icons/instagram.png')} alt="instagram"></img>
                    <img src={require('../../icons/facebook.png')} alt="facebook"></img>
                    <img src={require('../../icons/twitter.png')} alt="twitter"></img>
                </div>
                
                <address>
                    <p>Tulum, Quintana Roo, México.</p>
                    <p>Phone: +52 1 (012) 345 6789</p>
                    <p>Email: info@moontribe.com</p>
                </address>
            </section>


            <section>
                <div className="newsletter">
                    <p>JOIN OUR FAMILY</p>

                    <form>
                        <input type="text" placeholder="SIGN UP FOR EMAIL UPDATES"></input>
                        <input type="button" value="SIGN UP"></input>
                    </form>
                </div>

                <div className="ourHome">
                    <div>
                        <p>OUR HOME</p>
                        <a href="/">TULUM</a>
                    </div>

                    <div>
                        <p>OPENING SOON</p>
                        <a href="/">ALULA</a>
                        <a href="/">HONOLULU</a>
                        <a href="/">BALI-UBUD</a>
                    </div>

                    <div>
                        <p>MOONTRIBE</p>
                    </div>
                </div>
                
            </section>
        </footer>
    );
}