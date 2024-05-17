"use client";

import React, { useState, useEffect } from 'react';
import styles from './card.module.css';

async function getCard() {
  const response = await fetch('https://drop-api.ea.com/rating/fc-24');
  const card = await response.json();
  return card;
}

export default function Card() {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getCard();
      setCardData(data);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.card}>
      {cardData ? <h1>{cardData}</h1> : <p>Loading...</p>}
    </div>
  );
}