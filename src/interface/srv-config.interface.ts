import { AppConfigInterface, IDatabaseConfig, SwaggerOptionsInterface } from "./interface";

export interface SrvConfigInterface extends AppConfigInterface{
    swagger: Omit<SwaggerOptionsInterface, keyof AppConfigInterface>

    db: IDatabaseConfig,
    jwtSecret: string
}