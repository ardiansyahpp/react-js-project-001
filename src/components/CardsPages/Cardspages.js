import { useState } from 'react';


const Cardspage = ({name, sourceimage}) => {

    const [isBigger, setBigger] = useState(false);

    const handleClick = () => {
        setBigger(!isBigger)
    }

    return (
        <div className="cards__container" onClick={handleClick}>
            <div className="image__container">
                <img className={isBigger ? 'bigger' : 'image__core'} src={sourceimage} alt="IMG"/>
            </div>
            <div className="text__container">
                <p>{ name }</p>
                <p>LINK</p>
            </div>
        </div>
    );
}


export default Cardspage;