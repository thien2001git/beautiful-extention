import { arrayTP } from "../../../utils/Utils"
export default class Location {
    latitude: number = 0
    longtitude: number = 0
    country: string = "VN"
    city: string = arrayTP[0]
    distric: string = arrayTP[0]

    constructor(latitude: number, longtitude: number, country: string, city: string, distric: string ) {
        this.latitude = latitude
        this.longtitude = longtitude
        this.country = country
        this.city = city
        this.distric = distric
    }
}

export const defaultLocation = new Location(0,0,"VN", "Hà Nội", "Từ Liêm")