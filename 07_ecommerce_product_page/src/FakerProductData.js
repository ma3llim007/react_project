import { faker } from "@faker-js/faker";
export const createRandomProducts = () => {
    return {
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlPicsumPhotos(200, 200),
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    };
};
faker.seed(123);

export const ProductsList = faker.helpers.multiple(createRandomProducts, {
    count: 20,
});
