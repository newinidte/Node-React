
   export function locationToDB(location){
        let locationDetails = {
        Id : location.locationId?location.locationId:null,
        Name :location.name,
        Description:location.description,
        CentreId:location.centerId?location.centerId:null
        }
        return locationDetails
    }
    
     export function assetsToDB(asset){
        let assetDetails = {
        Id : asset.assetId?asset.assetId:null,
        Name :asset.name,
        Description:asset.description,
        Width:asset.width,
        Height:asset.height,
        Length:asset.length,
        Status:asset.status?asset.status:'I',
        LocationId:asset.locationId
        }
    
        return assetDetails
    }
    
     export function centersToDB(centre){
        let centreDetails = {
        Id : centre.centreId?centre.centreId:null,
        Name :centre.name,
        Street:centre.street,
        City:centre.city,
        State:centre.state,
        ZipCode:centre.zipCode
        }
        return centreDetails;
    }


