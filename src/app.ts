import express, {Request, Response, NextFunction} from 'express'
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cors from 'cors';

import routes from './routes'
import Database from './infra/mongoose'

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.connect();
  }

  private async connect(): Promise<void> {
    const db = new Database()
    await db.connect()
  }

  private config(): void {
    dotenv.config();

    this.app.use(helmet());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
    this.app.use(cors());

    this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      console.log(err);
    })
  }
}

export default new App().app;