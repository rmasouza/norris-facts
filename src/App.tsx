import React, { Suspense, lazy } from 'react';
import { configure } from 'mobx';
import { Router, Link } from '@reach/router';
import { StoreProvider } from './store/StoreProvider';
import Layout from './components/common/Layout';
import FactsPage from './pages/FactsPage';
import Loading from './components/icons/Loading';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

configure({ enforceActions: 'observed' });

const App: React.FC = () => (
    <StoreProvider>
        <Layout>
            <Suspense fallback={<Loading />}>
                <Router>
                    <Home path="/" />
                    <FactsPage path="fact/:category" />
                    <NotFound default />
                </Router>
            </Suspense>
        </Layout>
    </StoreProvider>
);

export default App;
