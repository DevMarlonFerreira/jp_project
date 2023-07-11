import mongoose, { Mongoose } from "mongoose";
import logger from '@config/logger';

const URL: string = "mongodb://root:admin@localhost:27017/apiinfluencers?authSource=admin";
const options: Record<string, unknown> = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true
}

export const connect = async (): Promise<Mongoose | void> => {
    mongoose.set('strictQuery', true);
    return await mongoose.connect(URL, options)
        .then(() =>
            logger.info('Mongodb conectado')
        )
        .catch((err) =>
            logger.info('Erro ao tentar se conectar ao DB: ' + err)
        );
}

export const close = (): Promise<void> => mongoose.connection.close();

export default mongoose;