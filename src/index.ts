import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import pinoHttp from 'pino-http';

dotenv.config();

const logger = pinoHttp({
  quietReqLogger: true, // turn off the default logging output
  transport: {
    target: 'pino-pretty', // use the pino-http-print transport and its formatting output
    options: {
      levelFirst: true, // [INFO | ERROR ] ...etc
      colorize: true, // Add colors to the levels
      crlf: true, // New line if string is too long
      translateTime: true // translates epoch/unix time to human readable time
    }
  }
});
const app: Express = express();
const port: string | number = process.env.PORT || 300;

// Use pinoHttp middleware and logger and automatically binds to req.log
app.use(logger);

app.get('/', (req: Request, res: Response) => {
  req.log.info({req, res}, "TESTSETSETSETESTs");
  res.send('Express + TypeScript Server');
});

app.listen(port, () => console.log(`⚡️ [server]: Server is running at https://localhost:${port}`));