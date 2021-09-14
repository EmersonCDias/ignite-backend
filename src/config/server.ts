import express from 'express';

import categoriesRoutes from '../modules/cars/routes/categories.routes';
import specificationsRoutes from '../modules/cars/routes/services.routes';

const PORT: string | number = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationsRoutes);

app.listen(PORT, () => console.log(`Hosting @${PORT}`));
