import { Faker, en } from "@faker-js/faker";

export const customFaker = new Faker({ locale: [en] });

export const latestTrendsImages = [1, 2, 3, 4, 5].map(() => ({
    image: customFaker.image.urlLoremFlickr({
        category: "hoodies",
        height: 300,
        width: 200,
    }),
    title: customFaker.commerce.productName(),
}));
export const popularSuggestions = [1, 2, 3, 4, 5].map(() =>
    customFaker.commerce.productAdjective()
);