import 'dotenv/config';
import Server from './server';
import HelloController from './controllers/hello.controller';

const server = new Server([new HelloController()]);

server.listen();
