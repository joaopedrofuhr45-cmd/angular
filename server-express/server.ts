import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import passagensRotas from './src/modules/passagem/presentation/passagensRotas';
import usuarioRotas from './src/modules/usuario/presentation/usuarioRotas';
import bannerRotas from './src/modules/banner/presentation/bannerRotas';
import hotelRotas from './src/modules/hotel/presentation/hotelRotas';
import { errorHandler } from './src/shared/middlewares/passagensErrorHandler';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/passagens', passagensRotas);
app.use('/api/usuarios', usuarioRotas);
app.use('/api/banners', bannerRotas);
app.use('/api/hoteis', hotelRotas);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});