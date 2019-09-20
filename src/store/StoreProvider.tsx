import React from 'react';
import FactsStore from './FactsStore';

const store = new FactsStore();

const StoreContext = React.createContext<FactsStore>(store);
export const StoreProvider: React.FC = ({ children }) => {
    return (
        <StoreContext.Provider value={store}>
            { children }
        </StoreContext.Provider>
    );
};

export const useStore = (): FactsStore => {
    const factStore = React.useContext<FactsStore>(StoreContext);
    if (!factStore) {
        throw new Error('You must use StoreProvider!');
    }
    return factStore;
};
