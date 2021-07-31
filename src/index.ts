import 'reflect-metadata';
import './dbconn';
import { config } from 'dotenv';
config();

import http, { Server } from 'http';
import express, {Express} from 'express';

const app: Express = express();
import routes from './routes';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const server: Server = http.createServer(app);

server.listen(process.env.PORT || 3000);
server.on('listening', () => console.log('Server on.'));
