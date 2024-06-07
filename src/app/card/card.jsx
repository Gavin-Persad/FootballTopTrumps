"use client";

import React, { useState, useEffect } from 'react';
import styles from './card.module.css'; 
import footballPlayerData from './playerData';

export default function Card() {

const randomPlayer = Math.floor(Math.random() * footballPlayerData[1].length);

  return(
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={footballPlayerData[1][randomPlayer].image} alt="player" />
      </div>
      <div className={styles.cardContent}>
        <h2>{footballPlayerData[1][randomPlayer].name}</h2>
        <p>{footballPlayerData[1][randomPlayer].facts.position}</p>
        <p>{footballPlayerData[1][randomPlayer].facts.club}</p>
        <p>{footballPlayerData[1][randomPlayer].facts.country}</p>
        <p>Rating: {footballPlayerData[1][randomPlayer].rating}</p>
        <div className={styles.attributes}>
          <p> {footballPlayerData[0][0].statTitle1} : {footballPlayerData[1][randomPlayer].attributes.stat1}</p>
          <p> {footballPlayerData[0][0].statTitle2} : {footballPlayerData[1][randomPlayer].attributes.stat2}</p>
          <p> {footballPlayerData[0][0].statTitle3} : {footballPlayerData[1][randomPlayer].attributes.stat3}</p>
          <p> {footballPlayerData[0][0].statTitle4} : {footballPlayerData[1][randomPlayer].attributes.stat4}</p>
          <p> {footballPlayerData[0][0].statTitle5} : {footballPlayerData[1][randomPlayer].attributes.stat5}</p>
          <p> {footballPlayerData[0][0].statTitle6} : {footballPlayerData[1][randomPlayer].attributes.stat6}</p>
          <p> {footballPlayerData[0][0].statTitle7} : {footballPlayerData[1][randomPlayer].attributes.stat7}</p>
        </div>
      </div>
    </div>
  )

}