export const fetchProductsApi = async () => {
    const fetchResult = await new Promise(resolve => setTimeout(() => resolve(products), 1000));

    return fetchResult;
}

const products = [
    {id: '1', title: 'Smart 1', text: 'Description 1', image: 'images/img01.jpg', quantity: 5},
    {id: '2', title: 'Smart 2', text: 'Description 2', image: 'images/img02.jpg', quantity: 2},
    {id: '3', title: 'Smart 3', text: 'Description 3', image: 'images/img03.jpg', quantity: 8},
    {id: '4', title: 'Smart 4', text: 'Description 4', image: 'images/img04.jpg', quantity: 9},
];