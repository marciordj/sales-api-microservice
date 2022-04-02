import express from 'express';

const env = process.env;
const PORT = env.PORT || 3002;
const app = express();

app.listen(PORT, () => console.info(`Server started at ${PORT}`))

