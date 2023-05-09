// Helps to handle http errors
import createError from 'http-errors';
// Import the Express Library
import express from 'express';
// Is a Core-Node library to manage system paths
import path from 'path';
// Helps to parse client cookies
import cookieParser from 'cookie-parser';
// Library to log http communication
import morgan from 'morgan';

// Importing template-engine
import configTemplateEngine from '@server/config/templateEngine';

// Setting Webpack Modules
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
// Importing webpack configuration
import webpackConfig from '../webpack.dev.config';

// Impornting winston logger
import log from './config/winston';

// Importando enrutador
import router from './router';

// Creando variable del directorio raiz
// eslint-disable-next-line
global["__rootdir"] = path.resolve(process.cwd());

// We are creating the express instance
const app = express();

// Get the execution mode
const nodeEnviroment = process.env.NODE_ENV || 'production';

// Deciding if we add webpack middleware or not
if (nodeEnviroment === 'development') {
  // Start Webpack dev server
  console.log('🦿Ejecutando en modo desarrollo');
  // Adding the key "mode" with its value "development"
  webpackConfig.mode = nodeEnviroment;
  // Setting the port
  webpackConfig.devServer.port = process.env.PORT;
  // Setting up the HMR (Hot Module Replacement)
  webpackConfig.entry = [
    'webpack-hot-middPleware/client?reload=true&timeout=1000',
    webpackConfig.entry,
  ];
  // Agregar el plugin a la configuración de desarrollo
  // de webpack
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  // Creating the bundler
  const bundler = webpack(webpackConfig);
  // Enabling the webpack middleware
  app.use(
    WebpackDevMiddleware(bundler, {
      publicPath: webpackConfig.output.publicPath,
    })
  );
  // Enabling the webpack HMR
  app.use(WebpackHotMiddleware);
} else {
  console.log('🐱‍👤Ejecutando en modo produccion');
}

// 👁 view engine setup 👁
configTemplateEngine(app);

// Registering middlewares
// Log all received request
app.use(morgan('combined', { stream: log.stream }));
// Parse request data into json
app.use(express.json());
// Decode the url info
app.use(express.urlencoded({ extended: false }));
// Parse client cookies into json
app.use(cookieParser());
// Set up static file server
app.use(express.static(path.join(__dirname, '../public')));

// Registering routes
router.addRoutes(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  log.info(`404 Pagina no encontrada ${req.method} ${req.originalUrl}`);
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  log.error(`${err.status || 500} - ${err.message}`);
  res.render('error');
});

export default app;
