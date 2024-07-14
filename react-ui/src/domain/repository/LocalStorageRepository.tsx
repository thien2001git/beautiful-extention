import Location from "../../data/datasource/model/Location"
export default interface LocalStorageRepository {
    getLocationInfo(): Location
    setLocation(location: Location): void
}