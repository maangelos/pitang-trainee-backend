import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.get('/', (required,response) => response.json({message: 'Running'}));
app.listen(PORT, () => {
	console.log('server is running');
});