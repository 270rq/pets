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

  export interface AppConfigInterface {
    logger: {
        level: string | 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly';
        colorLogs: boolean;
        prettyPrint: boolean;
    };
    serviceName: string;
    longRequestValue: number;
    version: string;
    port: number;
    debug?: boolean;
    buildTag?: string;
    development?: boolean;
}

export interface SwaggerOptionsInterface {
  swaggerHost?: string;
  version?: string;
  serviceName?: string;
  port?: number;
  enabled: boolean;
  buildTag?: string;
}

export interface IDatabaseConfig {
  defaults: {
    orderBy: string
    limit: number
  }
}



  