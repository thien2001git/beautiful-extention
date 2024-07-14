import WeartherRepository from "../../domain/repository/WeartherRepository";
import OpenWeatherInstance from "../datasource/api/OpenWeatherInstance";
import { weatherKey } from "../../presentation/component/helper/Constant";
import Location from "../datasource/model/Location";
import LocalStorageRepository from "../../domain/repository/LocalStorageRepository";
import LocalStorageRepositoryImpl from "./LocalStorageRepositoryImpl";


class WeartherRepositoryImpl implements WeartherRepository {
    
    localStorageRepository: LocalStorageRepository = new LocalStorageRepositoryImpl()

    getReverse(latitude: number, longitude: number): void {
        OpenWeatherInstance.get(`/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=${weatherKey}&lang=vi`).then((res) => {
            console.log(res.data)
            const location_: {
                country: string,
                lat: number,
                lon: number,
                local_names: {vi: string}
                name: string
            } = res.data[0]

            const location: Location = new Location(location_.lat, location_.lon, location_.country, location_.name, location_.name)
            this.localStorageRepository.setLocation(location)

        }).catch((err) => {
            console.log(err)
        })
    }

    oneCall(latitude: number, longitude: number): void {
        OpenWeatherInstance.get(`/onecall?lat=${latitude}&lon=${longitude}&&exclude=minutely,alerts&appid=${weatherKey}&lang=vi`).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
}

export default WeartherRepositoryImpl