import { useState } from "react";

const Cards = () => {

    const [change, setChange] = useState(false)

    const handleClick = () => {
        setChange(!change)
    }

    return (
        <div className="cards-container">
            <div className={change ? "cards-content" : 'cards-content-blue'} onClick={handleClick} ></div>
            <div className={change ? "cards-content" : 'cards-content-blue'}></div>
            <div className="cards-content"></div>
            <div className="cards-content"></div>
        </div>
    );
}

export default Cards;