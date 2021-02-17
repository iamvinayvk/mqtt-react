import React from 'react';

const Cards=(props)=>{

    
    return (
        <div className="card-manual2">
            

            <ul className="cards">
          
            <li className="cards__item">
      <div className="card">
      
      <div className="card__content">
          <div className="card__title">Subscriber Temp</div>
          <p className="card__text">The Tempratrue is {props.messaTemp}</p>
          
      </div>
      </div>
      </li>
      <li className="cards__item">
      <div className="card">
      
      <div className="card__content">
          <div className="card__title">Subscriber Humdity</div>
          {console.log(props)}
          <p className="card__text">The Humidity is {props.messaHumidity}</p>
          
      </div>
      </div>
      </li>
            
            </ul>
        </div>
    )
}

export default Cards;