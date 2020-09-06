
import { getByCenterId } from '../src/routes/oOhRetrieve.js'



test('Check the center Name', async () => {
    const data = await getByCenterId(2);
    console.log(data+ JSON.stringify(data))
    expect(data[0].Name).toBe('westfield');
  });