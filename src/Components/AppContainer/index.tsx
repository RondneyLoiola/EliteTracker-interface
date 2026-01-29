import styles from './styles.module.css';

type AppContainerProps = {
	children: React.ReactNode;
};

function AppContainer({ children }: AppContainerProps) {
	return <div className={styles.app}>{children}</div>;
}

export default AppContainer;
