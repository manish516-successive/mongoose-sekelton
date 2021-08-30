import * as path from 'path';
import * as dotenv from 'dotenv';

const env = process.env.NODE_ENV || 'dev';
const dotenv_path = path.resolve(process.cwd(), `.${env}.env`);
const result = dotenv.config({ path: dotenv_path });

export const DatabaseConfig: string = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`