import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('build'));

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});