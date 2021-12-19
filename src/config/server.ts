import express from 'express';
import swaggerUi from 'swagger-ui-express';

import '../database';
import routes from '../routes';
import swaggerFile from './swagger.json';

const PORT: string | number = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);

app.listen(PORT, () => console.log(`Hosting @${PORT}`));
