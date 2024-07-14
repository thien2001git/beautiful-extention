import LocalStorageRepository from "../../domain/repository/LocalStorageRepository";
import Location from "../../data/datasource/model/Location"
import { myLocalStorage } from "../datasource/localstorage/LocalStorage";


const LOCATION_KEY = "location"

export default class LocalStorageRepositoryImpl implements LocalStorageRepository {
    setLocation(location: Location): void {
        myLocalStorage.setItem(LOCATION_KEY, JSON.stringify(location))
    }
    
    getLocationInfo(): Location {
        const locationStr = myLocalStorage.getItem(LOCATION_KEY)
        if(locationStr == null) {
            throw new Error(`${LOCATION_KEY} is null`)
        }
        return JSON.parse(locationStr) as Location
    }
}