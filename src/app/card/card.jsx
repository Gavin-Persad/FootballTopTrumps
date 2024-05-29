"use client";

import React, { useState, useEffect } from 'react';
import styles from './card.module.css'; 
import playerData from './playerData';

export default function Card() {

const randomPlayer = Math.floor(Math.random() * playerData.length);

  return(
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={playerData[randomPlayer].image} alt="player" />
      </div>
      <div className={styles.cardContent}>
        <h2>{playerData[randomPlayer].firstName} {playerData[randomPlayer].lastName}</h2>
        <p>{playerData[randomPlayer].position}</p>
        <p>{playerData[randomPlayer].club}</p>
        <p>{playerData[randomPlayer].country}</p>
        <p>Rating: {playerData[randomPlayer].rating}</p>
        <div className={styles.attributes}>
          <p>Attacking: {playerData[randomPlayer].attributes.attacking}</p>
          <p>Defending: {playerData[randomPlayer].attributes.defending}</p>
          <p>Skill: {playerData[randomPlayer].attributes.skill}</p>
          <p>Movement: {playerData[randomPlayer].attributes.movement}</p>
          <p>Power: {playerData[randomPlayer].attributes.power}</p>
          <p>Mentality: {playerData[randomPlayer].attributes.mentality}</p>
          <p>Goalkeeping: {playerData[randomPlayer].attributes.goalkeeping}</p>
        </div>
      </div>
    </div>
  )

}