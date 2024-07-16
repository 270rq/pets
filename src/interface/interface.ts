export interface IBreed{
  name: string
}

export interface IUser {
    email: string;
    password: string;
  }
  
  export interface IPet {
    name: string;
    animal: string;
    breedId: number;
    userId: number;
  }
  
  export interface IFood {
    name: string;
    price: string;
    weight: number;
    breedId: number;
  }
  
  export interface IOrder {
    userId: number;
    date: Date;
    rating: string;
  }
  
  export interface IOrderItem {
    orderId: number;
    foodId: number;
  }
  