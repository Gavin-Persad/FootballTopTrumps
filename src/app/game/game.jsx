'use client';

import { useState, useEffect } from 'react';
import footballPlayerData from '../playerData';
import styles from './game.module.css';

export default function Game() {
	const [playerCards, setPlayerCards] = useState([]);
	const [computerCards, setComputerCards] = useState([]);
	const [gameEnded, setGameEnded] = useState(false);

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

	if (playerCards.length > 0 && computerCards.length > 0 && !gameEnded) {
		return (
			<>
				<div>
					<h1>Game</h1>
					<p>Player Cards: {playerCards.length}</p>
					<p>Computer Cards: {computerCards.length}</p>
				</div>
				<div>
					<h3>How to play</h3>
					<p>
						Setup:
						You, the player, and the computer each have a stack of cards.
						These cards have been randomly selected from the deck.
						Your first card is revealed.

						Choose a Stat:
						Examine the stats on your card (e.g., Movement, Skill, Power).
						Select one stat to compare against the computer.

						Stat Comparison:
						Compare the chosen stat with the corresponding stat on the computer’s card.
						Whoever has the higher value in that stat wins the round.
						If the stats are equal, the computer wins.

						Winning the Round:
						The winner of the round takes both cards (yours and the computer’s).
						Add these cards to your collection.

						Keep Playing:
						Repeat steps 2-4 for each round.
						Continue until one player runs out of cards.

						Victory:
						The player holding all the cards at the end is the winner!
						Enjoy the game, and may the best stats prevail! 🃏🎉
					</p>
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

	} else if (gameEnded && playerCards.length === 0) {
		return (<h1>Computer wins!</h1>);
	  } else if (gameEnded && computerCards.length === 0) {
		return (<h1>Player wins!</h1>);
	  } else {
		return null;
	}



		function handleCompare(attribute) {
			return function() {
				if (playerCards[0].attributes[attribute] > computerCards[0].attributes[attribute]) {
					alert(`Player wins! Player had ${playerCards[0].attributes[attribute]} - Computer had ${computerCards[0].attributes[attribute]}`);
					const playerCard = playerCards.shift();
					const computerCard = computerCards.shift();
					setPlayerCards([...playerCards, playerCard, computerCard]);
					if (computerCards.length === 0) {
						setGameEnded(true);
				}} else {
					alert(`Computer wins! Player had ${playerCards[0].attributes[attribute]} - Computer had ${computerCards[0].attributes[attribute]}`);
					const playerCard = playerCards.shift();
					const computerCard = computerCards.shift();
					setComputerCards([...computerCards, playerCard, computerCard]);
					if (playerCards.length === 0) {
						setGameEnded(true);
				}}}}}