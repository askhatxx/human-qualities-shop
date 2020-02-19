export const fetchProductsApi = async () => {
    const fetchResult = await new Promise(resolve => setTimeout(() => resolve(products), 1000));

    return fetchResult;
}

const products = [
    {id: '1', title: 'Smart 1', text: 'Description 1', image: '/images/01.jpg', onMain: true, price: 1200, quantity: 100},
    {id: '2', title: 'Smart 2', text: 'Description 2', image: '/images/02.jpg', onMain: true, price: 2000, quantity: 100},
    {id: '3', title: 'Smart 3', text: 'Description 3', image: '/images/01.jpg', onMain: false, price: 3450, quantity: 100},
    {id: '4', title: 'Smart 4', text: 'Description 4', image: '/images/02.jpg', onMain: true, price: 2700, quantity: 0},
    {id: '5', title: 'Smart 5', text: 'Description 5', image: '/images/01.jpg', onMain: true, price: 5000, quantity: 100},
    {id: '6', title: 'Smart 6', text: 'Description 6', image: '/images/02.jpg', onMain: false, price: 1900, quantity: 0},
];

export const nonExistentProduct = (id: string) => {
    return {
        id: id || Date.now().toString(), 
        title: 'Does not exist', 
        text: '404', 
        image: '/images/img404.jpg', 
        onMain: false, 
        price: 0, 
        quantity: 1
    };
}