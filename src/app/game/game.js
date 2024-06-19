'use client';

import { useState, useEffect } from 'react';
import footballPlayerData from '../playerData';

export default function Game() {
	const [isShuffled, setIsShuffled] = useState(false);

	useEffect(() => {
		if (!isShuffled) {
			shuffleAndSelectCards(footballPlayerData);
			setIsShuffled(true);
		}
	}, [isShuffled]);

	function shuffleAndSelectCards(footballPlayerData) {
		let playerCards = [];
		let computerCards = [];

		const shuffledData = [...footballPlayerData[1]].sort(
			() => Math.random() - 0.5
		);

		for (let i = 0; i < shuffledData.length; i++) {
			if (i % 2 === 0) {
				playerCards.push(shuffledData[i]);
			} else {
				computerCards.push(shuffledData[i]);
			}
		}
	}
}
