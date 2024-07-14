import Location from "../../data/datasource/model/Location"
interface WeartherRepository {
    getReverse(latitude: number, longitude: number, weartherCallBack: WeartherCallBack):void
    oneCall(latitude: number, longitude: number): void
}

export interface WeartherCallBack {
    (location: Location): void
}

export default WeartherRepository