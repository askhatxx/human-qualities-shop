export const fetchProductsApi = async () => {
    const fetchResult = await new Promise(resolve => setTimeout(() => resolve(products), 1000));

    return fetchResult;
}

const products = [
    {
        id: '1',
        title: 'Sense of humor',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://askhatxx.github.io/human-qualities-shop/images/01.jpg',
        onMain: false,
        price: 3200,
        quantity: 100
    },
    {
        id: '2',
        title: 'Health',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://askhatxx.github.io/human-qualities-shop/images/02.jpg',
        onMain: false,
        price: 5300,
        quantity: 100
    },
    {
        id: '3',
        title: 'Supermind',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://askhatxx.github.io/human-qualities-shop/images/03.jpg',
        onMain: true,
        price: 2600,
        quantity: 100
    },
    {
        id: '4',
        title: 'Calm',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://askhatxx.github.io/human-qualities-shop/images/04.jpg',
        onMain: true,
        price: 5800,
        quantity: 100
    },
    {
        id: '5',
        title: 'Power',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://askhatxx.github.io/human-qualities-shop/images/05.jpg',
        onMain: true,
        price: 1800,
        quantity: 0
    },
    {
        id: '6',
        title: 'Style',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://askhatxx.github.io/human-qualities-shop/images/06.jpg',
        onMain: false,
        price: 1400,
        quantity: 0
    },
    {
        id: '7',
        title: 'Stress resistance',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://askhatxx.github.io/human-qualities-shop/images/07.jpg',
        onMain: true,
        price: 4500,
        quantity: 0
    },
    {
        id: '8',
        title: 'Equanimity',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://askhatxx.github.io/human-qualities-shop/images/08.jpg',
        onMain: true,
        price: 2000,
        quantity: 100
    },
    {
        id: '9',
        title: 'Charisma',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'https://askhatxx.github.io/human-qualities-shop/images/09.jpg',
        onMain: true,
        price: 4500,
        quantity: 100
    },
];

export const nonExistentProduct = (id: string) => {
    return {
        id: id || Date.now().toString(), 
        title: 'Does not exist', 
        text: '404', 
        image: 'https://askhatxx.github.io/human-qualities-shop/images/img404.jpg', 
        onMain: false, 
        price: 0, 
        quantity: 1
    };
}