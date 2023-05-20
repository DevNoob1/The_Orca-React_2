import React from 'react'
import '../style/prefooter.css'
function prefooter() {
    return (
        <div className='prefooter'>
            <div>
                <img src="https://img.icons8.com/?size=512&id=-2HdDIbQPO_9&format=png" alt="" />
                <h2>Free Wifi
                    <p style={{
                        fontSize: "2vmin",
                        color: "red"
                    }}>free wifi here to work</p>
                </h2>
            </div>
            <div>
                <img src="https://img.icons8.com/?size=512&id=8086&format=png" alt="" />
                <h2>Air Conditioned
                    <p style={{
                        fontSize: "2vmin",
                        color: "red"
                    }}>Beat the heat with ac and drinks</p>
                </h2>
            </div>
            <div>
                <img src="https://img.icons8.com/?size=512&id=7DNAxn61w5zi&format=png" alt="" />
                <h2>Free Refills
                    <p style={{
                        fontSize: "2vmin",
                        color: "red"
                    }}>Free refills in drinks and Pasta</p>
                </h2>
            </div>

        </div>
    )
}

export default prefooter
