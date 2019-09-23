import axios from 'axios';
import { IObservableArray, observable, runInAction } from 'mobx';
import { Fact } from '../models/Fact';

export default class FactsStore {
    categories: IObservableArray<string>;

    currentFact: Fact | null = null;

    constructor() {
        this.categories = observable.array([]);
    }

    async getCategories() {
        const response = await axios.get<Array<string>>('https://api.chucknorris.io/jokes/categories');
        if (response.status === 200) {
            runInAction(() => {
                this.categories.replace([...response.data, 'random']);
            });
        } else {
            throw response;
        }
    }

    async getRandomFacInCategory(category: string) {
        const response = await axios.get<Fact>('https://api.chucknorris.io/jokes/random',
            {
                params: { category },
            });

        if (response.status === 200) {
            runInAction(() => {
                this.currentFact = response.data;
            });
        } else {
            throw response;
        }
    }

    async getRandomFact() {
        const response = await axios.get<Fact>('https://api.chucknorris.io/jokes/random');

        if (response.status === 200) {
            runInAction(() => {
                this.currentFact = response.data;
            });
        } else {
            throw response;
        }
    }
}
