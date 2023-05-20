import React from 'react'
import '../style/title.css'
function title({ text }) {
    return (
        <div className='text'>
            <h1>{text}</h1>
        </div>
    )
}

export default title
