import React, { FC, useEffect, useState } from 'react';
import './FactsPage.scss';
import { navigate, RouteComponentProps } from '@reach/router';
import { observer, useDisposable } from 'mobx-react-lite';
import { runInAction } from 'mobx';
import { useStore } from '../store/StoreProvider';
import Loading from '../components/icons/Loading';
import NorrisFact from '../components/facts/NorrisFact';
import HomeIcon from '../components/icons/HomeIcon';

interface IHomeProps {
    category?: string;
}

type HomeProps = RouteComponentProps<IHomeProps>;

const FactsPageBase: FC<HomeProps> = (props) => {
    const { category } = props;
    const [isLoadingCategories, setIsLoadingCategories] = useState(true);
    const store = useStore();
    const buttonText = `get another ${category} fact`;

    const getFact = async () => {
        setIsLoadingCategories(true);
        if (category && category !== 'random') {
            await store.getRandomFacInCategory(category);
        } else {
            await store.getRandomFact();
        }
        setIsLoadingCategories(false);
    };

    const onHomeButtonClick = () => {
        navigate('/');
    };

    useEffect(() => {
        getFact();
    }, []);

    useDisposable(() => () => {
        runInAction(() => {
            store.currentFact = null;
        });
    });

    return (
        <section className="facts-page">
            <header className="header">
                <HomeIcon className="icon" onClick={onHomeButtonClick} />
                <h1 className="current-category">
                    {category}
                </h1>
            </header>

            <article className="content">
                {
                    isLoadingCategories && <Loading />
                }
                {
                    store.currentFact && !isLoadingCategories && <NorrisFact fact={store.currentFact} />
                }
            </article>

            <footer>
                <button className="retry-button" disabled={isLoadingCategories} onClick={getFact}>
                    {
                        buttonText
                    }
                </button>
            </footer>
        </section>
    );
};

const FactsPage = observer(FactsPageBase);
export default FactsPage;
