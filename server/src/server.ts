import * as express from "express";
import Controller from "./interfaces/controller.interface";

class Server {
  public app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express();

    this.initializeControllers(controllers);
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }
  public listen(): void {
    this.app.listen(process.env.PORT, () =>
      console.log(`Server listening on the port ${process.env.PORT}`)
    );
  }

  public getServer(): express.Application {
    return this.app;
  }
}

export default Server;
