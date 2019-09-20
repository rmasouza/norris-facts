import React from 'react';
import { configure } from 'mobx';
import { StoreProvider } from './store/StoreProvider';

configure({ enforceActions: 'observed' });

const App: React.FC = () => (
    <StoreProvider>
        <section>Hello World!</section>
    </StoreProvider>
);

export default App;
