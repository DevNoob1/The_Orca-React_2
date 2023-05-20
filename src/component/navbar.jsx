import React from 'react'
import '../style/navbar.css'
export default function navbar() {
  return (
    <div className='navbar'>
      <div className='icon'>
        <h4>FISHY</h4>
        <img src="https://cdn-icons-png.flaticon.com/512/5617/5617394.png" alt="" />
      </div>
      <div className='Details'>
        <select name="locations" id="locaitons">
          <option value="Locations">Locations</option>
          <option value="">world</option>
          <option value="London">London</option>
          <option value="Paris">Paris</option>
          <option value="New York">New York</option>
          <option value="Tokyo">Tokyo</option>
          <option value="Sydney">Sydney</option>
          <option value="Rome">Rome</option>
          <option value="Cairo">Cairo</option>
          <option value="Berlin">Berlin</option>
          <option value="Moscow">Moscow</option>

        </select>
      </div>
    </div>
  )
}
