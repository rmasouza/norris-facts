import React from 'react';
import {configure} from 'mobx';

configure({ enforceActions: 'observed' });

const App: React.FC = () => <section>Hello World!</section>;

export default App;
