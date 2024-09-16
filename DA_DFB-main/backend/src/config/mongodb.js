import { env } from '~/config/environment'

import mongoose from 'mongoose'

export const CONNECT_DB = async () => {
    await mongoose.connect(`mongodb+srv://hoangquyet3402S:${env.MONGO_DB}@cluster0.whfiqbd.mongodb.net/NaLa`)
        .then(() => {
            console.log('connect success!')
        })
        .catch((err) => {
            console.log(err)
        })
}

