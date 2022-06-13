/* eslint-disable import/no-extraneous-dependencies */
import { Router } from 'express';

import useragent from 'express-useragent';
import produtos from './produtos.routes';

const routes = Router();
routes.use(useragent.express());
routes.use('/produtos', produtos);



export default routes;
