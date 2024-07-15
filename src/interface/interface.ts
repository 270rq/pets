export interface IUser {
    email: string;
    password: string;
  }
  
  export interface IPet {
    name: string;
    animal: string;
    breed: string;
    userId: number;
  }
  
  export interface IFood {
    name: string;
    price: string;
    weight: number;
    forWhom: number;
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
  