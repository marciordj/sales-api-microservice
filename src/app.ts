import express from 'express';

const env = process.env;
const PORT = env.PORT || 3002;
const app = express();

app.get('/api/status', (req, res) => {
  return res.json({
    service: "Sales-api",
    status: "up",
    httpStatus: 200
  })
})

app.listen(PORT, () => console.info(`Server started at ${PORT}`))

