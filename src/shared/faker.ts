import { Faker, en } from "@faker-js/faker";

export const customFaker = new Faker({ locale: [en] });

export const latestTrendsImages = [1, 2, 3, 4, 5].map(() => ({
    image: customFaker.image.urlLoremFlickr({
        category: "fashion",
        height: 300,
        width: 200,
    }),
    title: customFaker.lorem.word(5),
}));
export const popularSuggestions = [1, 2, 3, 4, 5].map(() =>
    customFaker.commerce.productAdjective()
);