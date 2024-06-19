'use client';

import footballPlayerData from '../playerData';
import react, { useState, useEffect } from 'react';

export default function Game() {
	useEffect(() => {
		shuffleAndSelectCards(footballPlayerData);
	}, []);

	function shuffleAndSelectCards(footballPlayerData) {
		let playerCards = [];
		let computerCards = [];

		const shuffledData = footballPlayerData[1].sort(() => Math.random() - 0.5);
		console.log(shuffledData);
	}
}
