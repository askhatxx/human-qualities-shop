export interface IProduct {
    id: string
    title: string
    text: string
    image: string
    quantity: number
}

export interface IState {
    products: Array<IProduct>
    cart: Array<string>
}

export interface IAction {
    type: string
    payload: string | any
}