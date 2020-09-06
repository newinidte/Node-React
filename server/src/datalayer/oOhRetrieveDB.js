import { getKnexDBConnection } from '../common/knex.js'


export async function getByCenterIdDB(Id) {
  console.log('inside oOhRetrieveDB Id '+Id)
    const knexDB = await getKnexDBConnection();
    return knexDB
      .from("centres")
      .select("*")
      .where({ Id })
  }
  export async function getByAllCentresDB() {
    const knexDB = await getKnexDBConnection();   
    return knexDB
      .from("centres")
      .select("*")
  }
  export async function getCentrebyAssetsDB( Name) {
    const knexDB = await getKnexDBConnection();   
    return knexDB
      .from("assets")
      .select("*")
      .where({ Name })
  }
  
  export async function getCenterId() {
    const knexDB = await getKnexDBConnection(); 
    return knexDB
      .from("centres")
      .max('Id', { as: 'AUTO_INCREMENT' })
  
  }
  export async function getLocationId() {
    const knexDB = await getKnexDBConnection(); 
    return knexDB
      .from("locations")
      .max('Id', { as: 'AUTO_INCREMENT' })
  }
  export async function getAssetId() {
    const knexDB = await getKnexDBConnection(); 
    return knexDB
      .from("assets")
      .max('Id', { as: 'AUTO_INCREMENT' })
  }
  
  
  
  