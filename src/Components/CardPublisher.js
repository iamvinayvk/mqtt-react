import React from 'react';

const CardPublisher=(props)=>{
    return (
        <div>
        <div className="card-manual1">
            <ul className="cards">
    
        <li className="cards__item">
<div className="card">

<div className="card__content">
    <div className="card__title">Temprature</div>
    <input type="text" onChange={props.ChangeTemp} value={props.Temp} className="form__input" placeholder="Enter Temprature"/>
    {console.log(props)}
    <button className="btn btn--block card__btn" onClick={props.clickTemp}>Publish</button>
</div>
</div>
</li>
</ul>
<ul className="cards">
    
    <li className="cards__item">
<div className="card">

<div className="card__content">
<div className="card__title">Humidity</div>
<input type="text" onChange={props.ChangeHumidity} value={props.Humidity} className="form__input" placeholder="Enter Humidity"/>
<button className="btn btn--block card__btn" onClick={props.clickHumidity}>Publish</button>
</div>
</div>
</li>
</ul>
</div>
</div>
    )
}
export default CardPublisher;