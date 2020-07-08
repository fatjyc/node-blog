import { Router, Request, Response } from 'express';
import Controller from '../interfaces/controller.interface';

class HelloController implements Controller {
  public path = '/hello';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.print);
  }

  private print = async (_request: Request, response: Response) => {
    response.send('hello');
  };
}

export default HelloController;
