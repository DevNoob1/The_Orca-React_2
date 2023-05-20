import React from 'react'
import Chefcard from '../component/chefcard'

function Chef(props) {
    return (
        <div className='chef'>
            {props.chefs.map((item) => {
                return <Chefcard name={item.name} image={item.image} quote={item.quote} />
            })}
        </div>
    )
}

export default Chef
