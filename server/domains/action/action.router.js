// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import actionController from './action.controller';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
// GET '/projects'
router.get('/projects', actionController.projects);

// GET '/projects/add'
router.get('/add', actionController.add);

// Exporto este tramo de ruta
export default router;
