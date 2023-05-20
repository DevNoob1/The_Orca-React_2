import React from 'react';
import '../style/topcard.css';

function topcard(props) {
    return (
        <div className='card'>
            <img src={props.image} alt='' />
            <div className='detail'>
                <div>
                    <p>{props.name}</p>
                    <p>{props.rating} </p>
                </div>
                <div>
                    <p>{props.price}</p>
                </div>
            </div>
        </div>
    );
}

export default topcard;
