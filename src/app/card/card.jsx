"use client";

import React, { useState, useEffect } from 'react';
import styles from './card.module.css'; 
import playerData from './playerData';

export default function Card() {
  return(
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={playerData[0].image} alt={playerData[0].firstName} />
        </div>
        <div className={styles.playerInfo}>
          <h2>{playerData[0].firstName} {playerData[0].lastName}</h2>
          <h3>{playerData[0].position}</h3>
          <h3>{playerData[0].club}</h3>
          <h3>{playerData[0].rating}</h3>
        </div>
        <div className={styles.attributes}>
          <h3>Attributes</h3>
          <ul>
            <li>Attacking: {playerData[0].attributes.attacking}</li>
            <li>Defending: {playerData[0].attributes.defending}</li>
            <li>Skill: {playerData[0].attributes.skill}</li>
            <li>Movement: {playerData[0].attributes.movement}</li>
            <li>Power: {playerData[0].attributes.power}</li>
            <li>Mentality: {playerData[0].attributes.mentality}</li>
            <li>Goalkeeping: {playerData[0].attributes.goalkeeping}</li>
          </ul>
        </div>
      </div>
    </div>
  )

}