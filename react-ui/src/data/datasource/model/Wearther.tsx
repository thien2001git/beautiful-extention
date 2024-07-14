var x = {
    "coord": {
        "lon": 105.8553,
        "lat": 21.0303
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "mây đen u ám",
            "icon": "04n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 299.13,
        "feels_like": 299.13,
        "temp_min": 299.13,
        "temp_max": 299.13,
        "pressure": 1006,
        "humidity": 85,
        "sea_level": 1006,
        "grnd_level": 1004
    },
    "visibility": 7947,
    "wind": {
        "speed": 1.59,
        "deg": 132,
        "gust": 2.39
    },
    "clouds": {
        "all": 100
    },
    "dt": 1720974986,
    "sys": {
        "type": 1,
        "id": 9308,
        "country": "VN",
        "sunrise": 1720909393,
        "sunset": 1720957274
    },
    "timezone": 25200,
    "id": 1561096,
    "name": "Xom Pho",
    "cod": 200
}

export default class Wearther {
    coord: {} = {}
    weather: [] = []
    base: string = ""
    main:{} = {}
    visibility: number = 0
    wind:{}={}
    clouds:{}={}
    dt: number = 0
    timezone: number = 0
    id: number = 0
    name: number = 0
    cod: number = 0
}