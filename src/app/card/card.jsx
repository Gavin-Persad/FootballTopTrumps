"use client";

import React, { useState, useEffect } from 'react';
import styles from './card.module.css';

const Url = 'https://icanhazdadjoke.com/slack';

async function getCard() {
  try {
    const response = await fetch(Url);
    const card = await response.json();
    return card;
  } catch (error) { 
    console.error('Error:', error);
  }
    console.log("🚀 ~ getCard ~ card:", card)
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
      {cardData ? <p>{cardData.attachments[0].text}</p> : <p>Loading...</p>}
    </div>
  );
}