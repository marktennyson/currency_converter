import CorsMiddleware from '../../components/middleware/cors'
import CurrencyRates from "../../components/scrapper"
import Cors from 'cors';

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 
}

const cors = CorsMiddleware(
  Cors(corsOptions)
)

async function handler(req, res) {
  await cors(req, res);
  const rate = new CurrencyRates(req.query);
  var data = await rate.extract();
  res.status(200).json(data);
}

export default handler;