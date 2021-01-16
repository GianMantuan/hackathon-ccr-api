import { ConnectOptions, Connection, connect } from "mongoose";
import dotenv from 'dotenv';

export default class Database {
  private _url: string

  constructor() {
    this._url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  }

  public async getOptions(): Promise<ConnectOptions> {
    let connectionOptions: ConnectOptions;

    connectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      useFindAndModify: false
    }

    return connectionOptions;
  }

  public async connect(): Promise<void> {
    const mongooseOptions = await this.getOptions();
    let connection = new Connection();

    if (connection.readyState === 0) {
      await connect(this._url, mongooseOptions)
        .then(() => console.log(`Connected do MongoDB`))
        .catch(error => console.log(error))
    }
  }
}