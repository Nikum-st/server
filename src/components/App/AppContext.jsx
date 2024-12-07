import { createContext } from 'react';
import { useAppLogic } from './index';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const appLogic = useAppLogic();
	return <AppContext.Provider value={appLogic}>{children}</AppContext.Provider>;
};
