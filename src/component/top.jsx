import React from 'react';
import Topcard from '../component/topcard.jsx';
import '../style/top.css';

function Top(props) {
    const topCards = props.top.map((item) => (

        <Topcard
            key={item.id}
            name={item.name}
            image={item.image}
            rating={item.rating}
            price={item.price}
        />
    ));

    return (
        <div className='top-container'>
            <div className='top-wrapper'>
                {topCards}
            </div>
        </div>
    );
}

export default Top;
