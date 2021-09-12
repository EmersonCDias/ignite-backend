import express from 'express';

import categoriesRoutes from '../routes/categories.routes';

const PORT: string | number = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);

app.listen(PORT, () => console.log(`Hosting @${PORT}`));
