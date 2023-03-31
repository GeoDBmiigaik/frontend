import React from 'react';
import { AuthState } from '../Users/UsersMethods';

export type AppContextProps = {
  userContext: AuthState;
  setUserContext: (newUser: AuthState) => void;
};

export const AppContext = React.createContext<AppContextProps>({} as never);
