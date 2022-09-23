import './Cookies.scss';

export function Cookies(){

    return(
        <div className="cookies">
            <h2>COOKIE CONSENT</h2>

            <p>
                This website uses cookies that help the website
                functions and to help us understand how you interact  
                with our website <a href="#">Read more here</a>
            </p>

            <div className="buttons">
                <input type="button" value="DECLINE"></input>
                <input type="button" value="ACCEPT"></input>
            </div>
        </div>
    );
}