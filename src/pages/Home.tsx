import React, { FC, useEffect, useState } from 'react';
import './Home.scss';
import { RouteComponentProps } from '@reach/router';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store/StoreProvider';
import FactCategory from '../components/facts/FactCategory';
import Loading from '../components/icons/Loading';

type HomeProps = Partial<RouteComponentProps>;

const HomeBase: FC<HomeProps> = (props) => {
    const {} = props;
    const store = useStore();
    const [isLoadingCategories, setIsLoadingCategories] = useState(store.categories.length === 0);

    const initializeApp = async () => {
        if(store.categories.length === 0) {
            setIsLoadingCategories(true);
            await store.getCategories();
            setIsLoadingCategories(false);
        }
    };

    useEffect(() => {
        initializeApp();
    }, []);

    return (
        <section className="home-page">
            {
                isLoadingCategories && <Loading />
            }
            <ul className="list">
                {
                    store.categories.map((it) => <FactCategory key={it} category={it} />)
                }
            </ul>
        </section>
    );
};

const Home = observer(HomeBase);
export default Home;
