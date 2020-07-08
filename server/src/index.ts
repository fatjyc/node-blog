import * as express from 'express';

const app: express.Application = express();

app.get('/', (_, res) => {
    res.send('Hello');
});

app.listen(9293, () => {
    console.log('Server is running in port: 9293');
});
