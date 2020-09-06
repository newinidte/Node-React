import { locationToDB, assetsToDB } from '../common/utilities.js';
import { getKnexDBConnection } from '../common/knex.js'


export async function presistData(centresDataToBeInserted, locationsData, assetsData) {
    try {
      const knex = await getKnexDBConnection();
      return knex.transaction(async (trx) => {
  
        console.log('centresDataToBeInserted ' + JSON.stringify(centresDataToBeInserted))
        await knex('centres').transacting(trx).insert(centresDataToBeInserted);
  
        for (let locationData of locationsData) {
          const locationDataToBeInserted = locationToDB(locationData)
          console.log('locationDataToBeInserted ' + JSON.stringify(locationDataToBeInserted))
          await knex('locations').transacting(trx).insert(locationDataToBeInserted);
        }
  
        for (let assetData of assetsData) {
          const assetDataToBeInserted = assetsToDB(assetData)
          console.log('assetDataToBeInserted ' + JSON.stringify(assetDataToBeInserted))
          await knex('assets').transacting(trx).insert(assetDataToBeInserted);
        }
        await trx.commit();
      }
      )
    } catch (error) {
      await trx.rollback();
      return res.status(500).send(error)
    }
  }