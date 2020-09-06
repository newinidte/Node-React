
import authenticate from './authentication.js'
import express from 'express';
import bodyParser from 'body-parser';
import { getByCenterId, getByAllCentres, getCentrebyAssets} from './src/routes/oOhRetrieve.js';
import { postSubmitCentre} from './src/routes/oOhPresist.js';

const router = express();
const port = process.env.PORT || 5000;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// API calls
router.get('/api/getAllCentres', async (req, res) => {
  const data = await getByAllCentres();
  res.send(data);
});

router.get('/api/getCentrebyId', async (req, res) => {
  try{
  if (authenticate(req, res)) {
    const { Id } = req.query
    const data = await getByCenterId(Id)
    res.send(data);
  }
}catch(error){
res.status(500).send(error);
}
});

router.get('/api/getCentrebyAssets', async (req, res) => {
  try{
    const { Id } = req.query
    const data = await getCentrebyAssets(Id)
    res.send(data);
  }catch(error){
    res.status(500).send(error)
  }
});

router.post('/api/submitCentre', async (req, res) => {
    try {
      console.log('inside server.js in submitCentre')
      await postSubmitCentre(req,res)
      res.send('Centre Details successfully saved');
    } catch (error) {
      return res.status(400).send("Some error has occured")
    }
  });

  router.listen(port, () => console.log(`Listening on port ${port}`));
