import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import teamsRouter from './routes/teams';
import playersRouter from './routes/players';

var app = express();
//app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/teams', teamsRouter);
app.use('/players', playersRouter);

module.exports = app;
