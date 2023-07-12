
import React from "react";
import '../Burger/burger.css'

function Burger() {
  function getBurger() {
    const nav_mobile = document.querySelector(".nav_mobile")
    const burger = document.querySelector(".burger");
    burger.classList.toggle("activ");
    nav_mobile.classList.toggle("df")
    document.querySelector('body').classList.toggle('stopScrolling')
    

    document.querySelectorAll(".nav__link_mobile").forEach(item => {
      item.addEventListener('click', e=> {
        nav_mobile.classList.remove('df')
      })
    })
  }
  

  return (
    <div className="burger" onClick={getBurger}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
}
export default Burger;


