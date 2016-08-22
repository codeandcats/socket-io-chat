import * as express from 'express';
import {Request, Response} from 'express';

const app = express();

const http = require('http').Server(app);

app.get('/', (req: Request, res: Response) => {
	res.send('<h1>Hello world</h1>');
});

http.listen(3000, () => console.log('listening on *:3000'));
