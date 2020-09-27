import { Router } from 'express';

import appointmentRoutes from './appointments.routes';
import user from './user.routes';

const routes = Router();

routes.use('/appointments', appointmentRoutes);
routes.use('/users', user);

export default routes;
