'use client';

import { useState, useEffect } from 'react';
import footballPlayerData from '../playerData';
import styles from './game.module.css';

export default function Game() {
	const [playerCards, setPlayerCards] = useState([]);
	const [computerCards, setComputerCards] = useState([]);

	useEffect(() => {
		shuffleAndSelectCards(footballPlayerData);
	}, []);

	function shuffleAndSelectCards(data) {
		const shuffledData = [...data[1]].sort(() => Math.random() - 0.5);

		const player = [];
		const computer = [];

		for (let i = 0; i < shuffledData.length; i++) {
			if (i % 2 === 0) {
				player.push(shuffledData[i]);
			} else {
				computer.push(shuffledData[i]);
			}
		}
		setPlayerCards(player);
		setComputerCards(computer);
		}

	return (
		<>
			<div>
				<h1>Game</h1>
				<p>Player Cards: {playerCards.length}</p>
				<p>Computer Cards: {computerCards.length}</p>
			</div>
        {playerCards.length > 0 && (
            <div className={styles.card}>
				<div className={styles.cardImage}>
					<img
						src={playerCards[0].image}
						alt="player"
					/>
				</div>
				<div className={styles.cardContent}>
					<h2>{playerCards[0].name}</h2>
					<p>{playerCards[0].facts.position}</p>
					<p>{playerCards[0].facts.club}</p>
					<p>{playerCards[0].facts.country}</p>
					<p>Rating: {playerCards[0].rating}</p>
					<div className={styles.attributes}>
						<p>
							{' '}
							{footballPlayerData[0][0].statTitle1} :{' '}
							{playerCards[0].attributes.stat1}
						</p>
						<p>
							{' '}
							{footballPlayerData[0][0].statTitle2} :{' '}
							{playerCards[0].attributes.stat2}
						</p>
						<p>
							{' '}
							{footballPlayerData[0][0].statTitle3} :{' '}
							{playerCards[0].attributes.stat3}
						</p>
						<p>
							{' '}
							{footballPlayerData[0][0].statTitle4} :{' '}
							{playerCards[0].attributes.stat4}
						</p>
						<p>
							{' '}
							{footballPlayerData[0][0].statTitle5} :{' '}
							{playerCards[0].attributes.stat5}
						</p>
						<p>
							{' '}
							{footballPlayerData[0][0].statTitle6} :{' '}
							{playerCards[0].attributes.stat6}
						</p>
						<p>
							{' '}
							{footballPlayerData[0][0].statTitle7} :{' '}
							{playerCards[0].attributes.stat7}
						</p>
					</div>
				</div>
			</div> )}
		</>
	);
}
