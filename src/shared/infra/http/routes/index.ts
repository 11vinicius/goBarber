import { Router } from 'express';

import appointmentRoutes from '@modules/appointments/infra/http/routes/appointments.routes';
import user from '@modules/users/infra/http/routes/user.routes';
import sessionRouter from '@modules/users/infra/http/routes/session.routes';

const routes = Router();

routes.use('/appointments', appointmentRoutes);
routes.use('/users', user);
routes.use('/sessions', sessionRouter);

export default routes;
