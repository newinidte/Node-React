
import { getByCenterIdDB, getByAllCentresDB, getCentrebyAssetsDB} from '../datalayer/oOhRetrieveDB.js';

export async function getByAllCentres(){
   const data =   await getByAllCentresDB()
   return data;
}
export async function getByCenterId(Id){
    let data = ''
    if(Id){
    data =  await getByCenterIdDB(Id)
    }
    return data
}

export async function getCentrebyAssets(Id){
    const data =  await getCentrebyAssetsDB(Id)
    return data
}
