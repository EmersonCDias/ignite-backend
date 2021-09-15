import express from 'express';

import routes from '../routes';

const PORT: string | number = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Hosting @${PORT}`));
