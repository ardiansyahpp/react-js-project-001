import Cardspage from "../components/CardsPages/Cardspages"

const Cards = () => {
    return (
        <div className="cards__page">
            <Cardspage name={"Person 1"}
                sourceimage={'https://img4.wikia.nocookie.net/__cb20120815160236/simpsons/images/0/01/200px-Langdon_Alger.png'} />
            <Cardspage name={"Person 2"}
                sourceimage={'https://img1.wikia.nocookie.net/__cb20110929163657/simpsons/images/d/db/200px-Chuck_Muntz.png'} />
            <Cardspage name={"Person 3"}
                sourceimage={'https://img4.wikia.nocookie.net/__cb20120815160236/simpsons/images/0/01/200px-Langdon_Alger.png'} />
            <Cardspage name={"Person 4"}
                sourceimage={'https://img1.wikia.nocookie.net/__cb20110929163657/simpsons/images/d/db/200px-Chuck_Muntz.png'} />
        </div>
    );
}

export default Cards;