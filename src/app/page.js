import styles from './page.module.css';
import Card from './card/card';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<Card />
			</div>
		</main>
	);
}
