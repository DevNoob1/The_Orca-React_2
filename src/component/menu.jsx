import React from 'react';
import '../style/menu.css';

function Menu({ menu }) {
    const handleMouseEnter = (e) => {
        e.target.style.backgroundImage = 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), ' + e.target.style.backgroundImage;
    };

    const handleMouseLeave = (e) => {
        const backgroundImage = e.target.style.backgroundImage;
        e.target.style.backgroundImage = backgroundImage.replace(/linear-gradient\(rgba\(255, 255, 255, 0.9\), rgba\(255, 255, 255, 0.9\)\), /, '');
    };

    return (
        <div className="menu">
            {menu.map((category) => (
                <div key={Object.keys(category)[0]}>
                    <h2>{Object.keys(category)[0]}</h2>
                    {Object.values(category)[0].map((item) => (
                        <div
                            key={item.name}
                            className="menu-item"
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'bottom',
                            }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className='tang'>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <span>${item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Menu;
