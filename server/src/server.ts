import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import Controller from './interfaces/controller.interface';
import errorMiddleware from './middleware/error.middleware';

class Server {
  public app: express.Application;

  private port: string;

  constructor(controllers: Controller[]) {
    this.app = express();
    this.port = process.env.PORT || '9292';

    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });

    this.app.use(errorMiddleware);
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
  }

  public listen(): void {
    this.app.listen(this.port, () => console.log(`Server listening on the port ${this.port}`));
  }

  public getServer(): express.Application {
    return this.app;
  }
}

export default Server;
