import WeartherRepository from "../../domain/repository/WeartherRepository";
import { OpenWeatherInstance_1_0, OpenWeatherInstance_2_5 } from "../datasource/api/OpenWeatherInstance";
import { weatherKey } from "../../presentation/component/helper/Constant";
import Location from "../datasource/model/Location";
import LocalStorageRepository from "../../domain/repository/LocalStorageRepository";
import LocalStorageRepositoryImpl from "./LocalStorageRepositoryImpl";
import OneCall from "../datasource/model/OneCall";


class WeartherRepositoryImpl implements WeartherRepository {
    
    localStorageRepository: LocalStorageRepository = new LocalStorageRepositoryImpl()

    getReverse(latitude: number, longitude: number): void {
        console.log(`/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=${weatherKey}&lang=vi`)
        OpenWeatherInstance_1_0.get(`/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=${weatherKey}&lang=vi`).then((res) => {
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
        
        OpenWeatherInstance_2_5.get(`/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,alerts&appid=${weatherKey}&lang=vi`).then((res) => {
            console.log("oneCall")
            console.log(res.data)
        }).catch((err) => {
            console.log("oneCall")
            console.log(err)
        })
    }

    wearther(latitude: number, longitude: number): void {
        
        OpenWeatherInstance_2_5.get(`/weather?lat=${latitude}&lon=${longitude}&appid=${weatherKey}&lang=vi`).then((res) => {
            console.log("wearTher")
            console.log(res.data)
        }).catch((err) => {
            console.log("wearTher")
            console.log(err)
        })
    }
}

export default WeartherRepositoryImpl