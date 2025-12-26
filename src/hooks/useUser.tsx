/** biome-ignore-all lint/correctness/useExhaustiveDependencies: useEffect */
import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

export type UserData = {
	id: string;
	name: string;
	avatarUrl: string;
	token: string;
};

type UserContextProps = {
	getUserInfo: (githubCode: string) => Promise<void>; //função assíncrona
	userData: UserData;
}

type UserProviderProps = {
	children: React.ReactNode;
};

const LocalStorageKey = `${import.meta.env.VITE_LOCALSTORAGE_KEY}:userData`

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export function UserProvider({ children }: UserProviderProps) {
	const [userData, setUserData] = useState({} as UserData);

	function putUserData(data: UserData) { //colocar dados no localStorage
		setUserData(data);

		localStorage.setItem(LocalStorageKey, JSON.stringify(data));
	}

	async function getUserInfo(githubCode: string) {
		const { data } = await api.get<UserData>('/auth/callback', {
			params: {
				code: githubCode,
			},
		});

		putUserData(data);
	}

	async function loadUserData() {
		const localData = localStorage.getItem(LocalStorageKey);

		if (localData) {
			setUserData(JSON.parse(localData) as UserData);
		}
	}

	useEffect(() => {
		loadUserData();
	}, []);

	return (
		<UserContext.Provider value={{ userData, getUserInfo }}>
			{children}
		</UserContext.Provider>
	);
}

export function useUser() {
	const context = useContext(UserContext);

	if (!context) {
		throw new Error('useUser must be used within a UserProvider');
	}

	return context;
}

export default UserProvider;
