// Importando enrutador home
import homeRouter from './domains/home/home.router';
// Importando enrutador user
import userRouter from './domains/user/user.router';
// Importando enrutador user
import aboutRouter from './domains/about/about.router';
// Importando enrutador user
import actionRouter from './domains/action/action.router';

// Función que agrega rutas
const addRoutes = (app) => {
  // Agregando enrutado de Home
  app.use('/', homeRouter);
  // Agregar el enrutado de user
  app.use('/user', userRouter);
  // Agregar el enrutado de about
  app.about('/about', aboutRouter);
  // Agregar el enrutado de action
  app.action('/action', actionRouter);
  return app;
};

// Exportando objeto
export default { addRoutes };
