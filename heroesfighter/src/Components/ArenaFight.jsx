import React from 'react';
import './ArenaFight.css';
import Card from './Card.jsx';

function ArenaFight ({ items, items2 }) {

  return (
    <div className="arena_box">
      <div className="card_versus">
        <Card items={items} />
        <p className="versus_text">VS</p>
        <Card items={items2} />
      </div>
      <div className="button_box">
        <button className="bonusButtonLightning" aria-label="Save" type="button" />
        <button className="bonusButtonBoxingGlove" aria-label="Save" type="button" />
        <button className="bonusButtonBook" aria-label="Save" type="button" />
      </div>
      <div className="fightButton_box">
        <button className="fightButton" type="button">FIGHT</button>
      </div>
    </div>
  );
}


export default ArenaFight;