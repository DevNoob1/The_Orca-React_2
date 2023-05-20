import React from 'react'
import '../style/chefcard.css'
function chefcard(props) {
    return (
        <div className='cards'>
            <div>
                <img src={props.image} alt="" />
            </div>
            <div>
                <h1>{props.name}</h1>
                <p><img src="https://img.icons8.com/?size=512&id=eeF6NFOkNZqI&format=png" alt="" /> {props.quote} </p>
            </div>
        </div>
    )
}

export default chefcard
