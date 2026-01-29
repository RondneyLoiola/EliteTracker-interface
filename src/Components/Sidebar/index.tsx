import {
	ClockClockwiseIcon,
	ListChecksIcon,
	SignOutIcon,
} from '@phosphor-icons/react';
import clsx from 'clsx';
import { Link, useLocation, useNavigate } from 'react-router';
import { useUser } from '../../hooks/useUser';
import styles from './styles.module.css';

function SideBar() {
	const { userData, logout } = useUser();
	const navigate = useNavigate();
	const { pathname } = useLocation();

	function handleLogout() {
		logout();
		navigate('/entrar');
	}

	return (
		<div className={styles.container}>
			<img src={userData.avatarUrl} alt={userData.name} />
			<div className={styles.links}>
				<Link to="/">
					<ListChecksIcon className={clsx(pathname === '/' && styles.active)} />
				</Link>
				<Link to="/foco">
					<ClockClockwiseIcon
						className={clsx(pathname === '/foco' && styles.active)}
					/>
				</Link>
			</div>
			<SignOutIcon onClick={handleLogout} className={styles.signout} />
		</div>
	);
}

export default SideBar;
