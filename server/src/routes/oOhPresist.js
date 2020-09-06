import { centersToDB } from '../common/utilities.js';
import { presistData } from '../datalayer/oOhPresistDB.js';
import { getCenterId,getLocationId, getAssetId} from '../datalayer/oOhRetrieveDB.js';
import { getKnexDBConnection } from '../common/knex.js'

export async function postSubmitCentre(req,res){

    const knex = await getKnexDBConnection();
    console.log('inside postSubmitCentre')
    let assetsData = []
    let locationsData = []
    let locationCount = 0
    let assetCount = 0
    const centreId = await getCenterId(knex)
    if(req.body.centres.centreId){
        req.body.centres.centreId = centreId[0].AUTO_INCREMENT+1
      }
        
        const centresDataToBeInserted = centersToDB(req.body.centres)
        const { locations } = req.body.centres;
        for (let location of locations) {
          let locationID;
          if (!location.locationId) {
            locationID = await getLocationId(knex)
            locationCount = locationCount == 0 ? locationID[0].AUTO_INCREMENT+1 : locationCount + 1;
            location.locationId = locationCount
          }
          location.centerId = centreId[0].AUTO_INCREMENT
          locationsData.push(location);
      
          const { assets } = location
          let assetID;
      if(!assets.assetId){
          assetID = await getAssetId(knex)
          assetCount = assetCount == 0 ? assetID[0].AUTO_INCREMENT+1 : assetCount + 1;
          assets.assetId = assetCount
      }
      
          assets.locationId = location.locationId
          assetsData.push(assets)
        }
        console.log('calling presist data in oOhPresist.js')
         await presistData(centresDataToBeInserted, locationsData, assetsData)
     

}