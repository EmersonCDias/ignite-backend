import express from 'express';

import categoriesRoutes from './routes/categories.routes';

const port = 3000;
const app = express();

app.use(express.json());

app.post('/categories', categoriesRoutes);

app.listen(3000, () => console.log(`Hosting @${port}`));
