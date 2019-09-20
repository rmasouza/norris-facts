import FactsStore from './FactsStore';

describe('FactsStore.ts', () => {
    it('should get categories', async () => {
        const store = new FactsStore();
        await store.getCategories();
        expect(store.categories.length).toBeGreaterThan(0);
    });

    it('should get random fact', async () => {
        const store = new FactsStore();
        await store.getRandomFact();
        expect(store.currentFact).not.toBeNull();
    });

    it('should get random fact in "science" category', async () => {
        const store = new FactsStore();
        await store.getRandomFacInCategory('science');
        expect(store.currentFact).not.toBeNull();
        const [category] = store.currentFact!.categories;
        expect(category).toEqual('science');
    });
});
