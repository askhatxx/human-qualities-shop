export interface IProduct {
    id: string
    title: string
    text: string
    image: string
    price: number
    quantity: number
}

export interface IState {
    products: Array<IProduct>
    cart: Array<string>
    status: string
}

export interface IAction {
    type: string
    payload: string | any
}