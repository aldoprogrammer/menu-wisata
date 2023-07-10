import React from "react";
import Menu from "./components/Menu";

function App () {
  const kataHati = "Aku suka kamu";
  const kataJiwa = "Semangat terus yok";
  const clicked = () => {
    alert("wah dipencet nih")
  }
  const footer = () => {
    return( 
    <>
    <i>Keren abis gilak banget sih lu</i><br></br>
    <i>Asli mang jadi laper</i>
    </>
    )
  }

  return (
  <Menu kataHati={kataHati} kataJiwa={kataJiwa} clicked={clicked} footer={footer}/>
  )
}

export default App;