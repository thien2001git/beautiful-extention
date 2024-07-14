import React from 'react'
import { weatherKey } from './helper/Constant';
import WeartherRepository from '../../domain/repository/WeartherRepository';
import WeartherRepositoryImpl from '../../data/repository/WeartherRepositoryImpl';
import { WeartherCallBack } from '../../domain/repository/WeartherRepository';
import Location from '../../data/datasource/model/Location';
import { defaultLocation } from '../../data/datasource/model/Location';

class Weather extends React.Component<{}, { location: Location }> {
    weartherRepository: WeartherRepository = new WeartherRepositoryImpl()
    constructor(props: {}) {
        super(props)
        this.state = {
            location: defaultLocation
        }
    }

    componentDidMount(): void {
        const { weartherRepository } = this
        const context = this

        const returnLocation: PositionCallback = (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            findWeatherDetails(latitude, longitude);
        }

        function findWeatherDetails(latitude: any, longitude: any) {

            const weartherCallBack: WeartherCallBack = (e: Location) => {
                context.setState({
                    location: e
                })
            }

            weartherRepository.getReverse(latitude, longitude, weartherCallBack)

            weartherRepository.oneCall(latitude, longitude)
            
            // httpRequestAsync(searchLink, weatherInfo);
            var searchLink = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherKey}&lang=vi`;
            // httpRequestAsync(searchLink, weatherInfo2);
        }

        const onGeoError: PositionErrorCallback = (error) => {
            let detailError;
            if (error.code === error.PERMISSION_DENIED) {
                detailError = 'Người dùng đã từ chối yêu cầu về Vị trí địa lý';
            } else if (error.code === error.POSITION_UNAVAILABLE) {
                detailError = 'Thông tin vị trí không có sẵn';
            } else if (error.code === error.TIMEOUT) {
                detailError = 'Yêu cầu nhận vị trí của người dùng đã hết thời gian chờ';
            } else {
                detailError = 'Lỗi không xác định';
            }
            alert(detailError);
        }



        var x = navigator.onLine;
        if (x === true) {
            let geolocation = navigator.geolocation;
            let options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0,
            };
            geolocation.getCurrentPosition(returnLocation, onGeoError, options);
        } else {
            alert(
                'Không có kết nối Internet! Thông tin thời tiết là bản trước khi ngắt kết nối! '
            );
            // if (localStorage.getItem('weather')) {
            //     weatherInfo(localStorage.getItem('weather'));
            //     weatherInfo2(localStorage.getItem('weather2'));
            //     theCityInfo(localStorage.getItem('city'));
            // }
        }
    }

    render(): React.ReactNode {
        const { location } = this.state
        return (
            <>
                <div className="weather noselect vt-0 weather-selector set-opacity">
                    <div className="city text-center">{location.city}<span className="city-name text-center font-size-3"></span>
                    </div>
                    <div className="weather__main center text-center">
                        <span className="temperature temperature-1"></span>
                    </div>
                    <span className="description font-size-3 text-center center"></span>
                    <div className="weather__other text-center center">
                        <span className="humidity"></span> -
                        <span className="wind-speed"></span>
                    </div>
                </div>
            </>
        )
    }
}

export default Weather