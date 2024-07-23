import { SrvConfigInterface } from '../interface/srv-config.interface';
import * as pack from '../../../package.json'

export default (): SrvConfigInterface => ({
    swagger: {
        enabled: true,
        swaggerHost: process.env.SWAGGER_HOST || ''
    },
    debug: process.env.DEBUG === 'true' || process.env.DEBUG === '1',
    logger: {
        colorLogs: process.env.LOG_COLORS === 'true' || process.env.LOG_COLORS === '1',
        level: process.env.LOG_LEVEL || 'info',
        prettyPrint: process.env.LOG_PRETTY === 'true' || process.env.LOG_PRETTY === '1',
    },
    db: {
        defaults: {
            orderBy: 'createdAt asc',
            limit: 20,
        },
    },
    jwtSecret: "",
    serviceName: 'pets',
    longRequestValue: 0,
    // version: process.env.VERSION || pack.version,
    version: process.env.VERSION || '0.0.1',
    port: 0
});
