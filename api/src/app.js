import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import teamsRouter from './routes/teams';
import playersRouter from './routes/players';
import dotenv from 'dotenv';
dotenv.config();

var app = express();
//app.use(cors());
// Log all incoming request headers for debugging
app.use((req, res, next) => {
	console.log('Incoming request:', req.method, req.url);
	console.log('Headers:', req.headers);
	next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/api/teams', teamsRouter);
app.use('/players', playersRouter);

module.exports = app;
