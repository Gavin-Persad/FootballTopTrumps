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

if (playerCards.length > 0 && computerCards.length > 0) {

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
							<button onClick={handleCompare('stat1')}>Compare {footballPlayerData[0][0].statTitle1}</button>
							<p>
								{' '}
								{footballPlayerData[0][0].statTitle2} :{' '}
								{playerCards[0].attributes.stat2}
							</p>
							<button onClick={handleCompare('stat2')}>Compare {footballPlayerData[0][0].statTitle2}</button>
							<p>
								{' '}
								{footballPlayerData[0][0].statTitle3} :{' '}
								{playerCards[0].attributes.stat3}
							</p>
							<button onClick={handleCompare('stat3')}>Compare {footballPlayerData[0][0].statTitle3}</button>
							<p>
								{' '}
								{footballPlayerData[0][0].statTitle4} :{' '}
								{playerCards[0].attributes.stat4}
							</p>
							<button onClick={handleCompare('stat4')}>Compare {footballPlayerData[0][0].statTitle4}</button>
							<p>
								{' '}
								{footballPlayerData[0][0].statTitle5} :{' '}
								{playerCards[0].attributes.stat5}
							</p>
							<button onClick={handleCompare('stat5')}>Compare {footballPlayerData[0][0].statTitle5}</button>
							<p>
								{' '}
								{footballPlayerData[0][0].statTitle6} :{' '}
								{playerCards[0].attributes.stat6}
							</p>
							<button onClick={handleCompare('stat6')}>Compare {footballPlayerData[0][0].statTitle6}</button>
							<p>
								{' '}
								{footballPlayerData[0][0].statTitle7} :{' '}
								{playerCards[0].attributes.stat7}
							</p>
							<button onClick={handleCompare('stat7')}>Compare {footballPlayerData[0][0].statTitle7}</button>
						</div>
					</div>
				</div> )}
			</>
		);

	} else if (playerCards.length === 0) {
		return <h1>Computer wins!</h1>;
	} else if (computerCards.length === 0) {
		return <h1>Player wins!</h1>;
	}

		function handleCompare(attribute) {
			return function() {
				if (playerCards[0].attributes[attribute] > computerCards[0].attributes[attribute]) {
					alert(`Player wins! Player had ${playerCards[0].attributes[attribute]} - Computer had ${computerCards[0].attributes[attribute]}`);
					const playerCard = playerCards.shift();
					const computerCard = computerCards.shift();
					setPlayerCards([...playerCards, playerCard, computerCard]);
				} else {
					alert(`Computer wins! Player had ${playerCards[0].attributes[attribute]} - Computer had ${computerCards[0].attributes[attribute]}`);
					const playerCard = playerCards.shift();
					const computerCard = computerCards.shift();
					setComputerCards([...computerCards, playerCard, computerCard]);
				}
			}
			
	}
}
