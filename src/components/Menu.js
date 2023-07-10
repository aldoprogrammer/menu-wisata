import React from 'react'

function Menu(props) {
  return (
    <div>
        <ul>
            <li>Makanan</li>
            <li>Perjalanan</li>
            <li>Objek Wisata</li>
            <li>Hotel</li>
            <li>{props.kataHati}</li>
            <li>{props.kataJiwa}</li>
        </ul>


      <button onClick={() => props.clicked()}>Ini tombol</button>
      <h1>Footer ni boss</h1>
      {props.footer()}
    </div>
  )
}
     
export default Menu