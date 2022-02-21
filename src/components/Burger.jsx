import React from 'react';
import burgerStyles from './Burger.module.scss'


const Burger = ({ onBurgerClick, open }) => {

  return (
    <div className={burgerStyles.button} onClick={() => onBurgerClick()}>
      <div className={!open ? burgerStyles.burger : burgerStyles.cross}/>
      <div className={!open ? burgerStyles.burger : burgerStyles.cross}/>
      <div className={!open ? burgerStyles.burger : burgerStyles.cross}/>
    </div>
  )
}

export default Burger;