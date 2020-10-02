import { Router } from 'express';

import appointmentRoutes from './appointments.routes';
import user from './user.routes';
import sessionRouter from './session.routes';

const routes = Router();

routes.use('/appointments', appointmentRoutes);
routes.use('/users', user);
routes.use('/sessions', sessionRouter);

export default routes;
