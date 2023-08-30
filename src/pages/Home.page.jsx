import React from 'react'
import Card from "../components/Card.component";

export default function Home(props) {
  const {cardsData} = props;
  
  console.log(cardsData)

  if (cardsData.length <= 0) {
    return (
      <div className="loading-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else {
    return (
    <div className='home'>
      <div className='home-image'>
        <p className='home-image-text'>Chez vous, partout et ailleurs</p>        
      </div>
      <div className="cards-container">
        {
          cardsData?.map((card, index) => {
            return <Card key={index} id={card.id} title={card.title} cover={card.cover}/>
          })
        }
      </div>
    </div>
  )
  }
}
