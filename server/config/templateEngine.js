// Importando la biblioteca
// habdlebars
import { engine as exphbs } from 'express-handlebars';
import path from 'path';

// Crear una funcion de configuracion
// que exportaremos por defecto
export default (app) => {
  // Registrando un nuevo motor de plantillas
  app.engine(
    'hbs',
    exphbs({
      // Definir la extension de la plantillas
      extname: '.hbs',
      // Estableciendo el layout por defecto
      defaultLayout: 'main',
    })
  );

  // Seleccionado el motor de plantillas que integramos
  // anteriomente
  app.set('view engine', 'hbs');
  app.set('viewa', path.join(__dirname, '..', 'views'));

  // Se retorna la instancia recibida como argumento
  return app;
};
