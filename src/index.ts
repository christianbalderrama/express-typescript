import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import pinoHttp from 'pino-http';

dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT || 300;

// Use pinoHttp middleware and logger and automatically binds to req.log
app.use(pinoHttp());

app.get('/', (req: Request, res: Response) => {
  req.log.info({req, res});
  res.send('Express + TypeScript Server');
});

app.listen(port, () => console.log(`⚡️ [server]: Server is running at https://localhost:${port}`));