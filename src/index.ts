import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import pino from 'pino';

dotenv.config();

const logger = pino();
const app: Express = express();
const port: string | number = process.env.PORT || 300;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  logger.info({}, `⚡️ [server]: Server is running at https://localhost:${port}`);
});