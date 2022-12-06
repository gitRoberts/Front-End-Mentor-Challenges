import React from 'react';
import data from '../mobile-data';

const Creations = () => {

  const [cards, setCards] = React.useState(data)
  return (
    <section className="creations-container">
      <h2>Our creations</h2>
      <section>
        {cards.map((card) => {
          const { id, image, title } = card
          return (
            <article key={id}>
              <div className='card-container'>
                
                <img src={image} alt="creations card" />
                <h3>{title}</h3>
              </div>
            </article>
          )
        })}
      </section>
      <div className="btn-container">
        <button className="btn">See All</button>
      </div>
    </section>
  )
}

export default Creations