import styles from './page.module.css';
import Game from './game/game';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<Game />
			</div>
		</main>
	);
}
