export const removeVietnameseTones = (str: string) => {
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
  str = str.replace(/\u02C6|\u0306|\u031B/g, "");
  str = str.replace(/ + /g, " ");
  str = str.replace(/\t/g, "");
  str = str.trim();
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " "
  );
  return str;
}
export const iconThoiTiet = {
  "01d": "fa-sun color-sun",
  "01n": "fa-moon",
  "02d": "fa-cloud-sun",
  "02n": "fa-cloud-moon",
  "03d": "fa-cloud blue-cloud",
  "03n": "fa-cloud blue-cloud",
  "04d": "fa-cloud",
  "04n": "fa-cloud",
  "09d": "fa-cloud-rain",
  "09n": "fa-cloud-rain",
  "10d": "fa-cloud-sun-rain",
  "10n": "fa-cloud-moon-rain",
  "11d": "fa-bolt",
  "11n": "fa-bolt",
  "13d": "fa-snowflake",
  "13n": "fa-snowflake",
  "50d": "fa-smog",
  "50n": "fa-smog",
};
export const arrayTP = [
  "Hà Nội",
  "Hải Phòng",
  "Đà Nẵng",
  "Hồ Chí Minh",
  "Cần Thơ",
  "Bà Rịa",
  "Bạc Liêu",
  "Bảo Lộc",
  "Bắc Giang",
  "Bắc Kạn",
  "Bắc Ninh",
  "Bến Tre",
  "Biên Hòa",
  "Buôn Ma Thuột",
  "Cà Mau",
  "Cam Ranh",
  "Cao Bằng",
  "Cao Lãnh",
  "Cẩm Phả",
  "Châu Đốc",
  "Đà Lạt",
  "Điện",
  "Biên Phủ",
  "Đông Hà",
  "Đồng Hới",
  "Đồng Xoài",
  "Hà Giang",
  "Hạ Long",
  "Hà Tiên",
  "Hà Tĩnh",
  "Hải Dương",
  "Hòa Bình",
  "Hội An",
  "Huế",
  "Hưng Yên",
  "Kon Tum",
  "Lai Châu",
  "Lạng Sơn",
  "Lào Cai",
  "Long Xuyên",
  "Móng Cái",
  "Mỹ Tho",
  "Nam Định",
  "Nha Trang",
  "Ninh Bình",
  "Phan Rang - Tháp Chàm",
  "Phan Thiết",
  "Phủ Lý",
  "Phúc Yên",
  "Pleiku",
  "Quảng Ngãi",
  "Quy Nhơn",
  "Rạch Giá",
  "Kiên Giang",
  "Sa Đéc",
  "Sầm Sơn",
  "Sóc Trăng",
  "Sơn La",
  "Sông Công",
  "Tam Điệp",
  "Tam Kỳ",
  "Tân An",
  "Tây Ninh",
  "Thái Bình",
  "Thái Nguyên",
  "Thanh Hóa",
  "Thủ Dầu Một",
  "Trà Vinh",
  "Tuy Hòa",
  "Tuyên Quang",
  "Uông Bí",
  "Vị Thanh",
  "Việt Trì",
  "Vinh",
  "Vĩnh Long",
  "Vĩnh Yên",
  "Vũng Tàu",
  "Yên Bái",
];
export const countryFull = [
  "AFGHANISTAN",
  "ÅLAND ISLANDS",
  "ALBANIA",
  "ALGERIA",
  "AMERICAN SAMOA",
  "ANDORRA",
  "ANGOLA",
  "ANGUILLA",
  "ANTARCTICA",
  "ANTIGUA AND BARBUDA",
  "ARGENTINA",
  "ARMENIA",
  "ARUBA",
  "AUSTRALIA",
  "AUSTRIA",
  "AZERBAIJAN",
  "BAHAMAS",
  "BAHRAIN",
  "BANGLADESH",
  "BARBADOS",
  "BELARUS",
  "BELGIUM",
  "BELIZE",
  "BENIN",
  "BERMUDA",
  "BHUTAN",
  "BOLIVIA",
  "BOSNIA AND HERZEGOVINA",
  "BOTSWANA",
  "BOUVET ISLAND",
  "BRAZIL",
  "BRITISH INDIAN OCEAN TERRITORY",
  "BRUNEI DARUSSALAM",
  "BULGARIA",
  "BURKINA FASO",
  "BURUNDI",
  "CAMBODIA",
  "CAMEROON",
  "CANADA",
  "CAPE VERDE",
  "CAYMAN ISLANDS",
  "CENTRAL AFRICAN REPUBLIC",
  "CHAD",
  "CHILE",
  "CHINA",
  "CHRISTMAS ISLAND",
  "COCOS (KEELING) ISLANDS",
  "COLOMBIA",
  "COMOROS",
  "CONGO",
  "CONGO, THE DEMOCRATIC REPUBLIC OF THE",
  "COOK ISLANDS",
  "COSTA RICA",
  "CÔTE D'IVOIRE",
  "CROATIA",
  "CUBA",
  "CYPRUS",
  "CZECH REPUBLIC",
  "DENMARK",
  "DJIBOUTI",
  "DOMINICA",
  "DOMINICAN REPUBLIC",
  "ECUADOR",
  "EGYPT",
  "EL SALVADOR",
  "EQUATORIAL GUINEA",
  "ERITREA",
  "ESTONIA",
  "ETHIOPIA",
  "FALKLAND ISLANDS (MALVINAS)",
  "FAROE ISLANDS",
  "FIJI",
  "FINLAND",
  "FRANCE",
  "FRENCH GUIANA",
  "FRENCH POLYNESIA",
  "FRENCH SOUTHERN TERRITORIES",
  "GABON",
  "GAMBIA",
  "GEORGIA",
  "GERMANY",
  "GHANA",
  "GIBRALTAR",
  "GREECE",
  "GREENLAND",
  "GRENADA",
  "GUADELOUPE",
  "GUAM",
  "GUATEMALA",
  "GUINEA",
  "GUINEA-BISSAU",
  "GUYANA",
  "HAITI",
  "HEARD ISLAND AND MCDONALD ISLANDS",
  "HOLY SEE (VATICAN CITY STATE)",
  "HONDURAS",
  "HONG KONG",
  "HUNGARY",
  "ICELAND",
  "INDIA",
  "INDONESIA",
  "IRAN, ISLAMIC REPUBLIC OF",
  "IRAQ",
  "IRELAND",
  "ISRAEL",
  "ITALY",
  "JAMAICA",
  "JAPAN",
  "JORDAN",
  "KAZAKHSTAN",
  "KENYA",
  "KIRIBATI",
  "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF",
  "KOREA, REPUBLIC OF",
  "KUWAIT",
  "KYRGYZSTAN",
  "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
  "LATVIA",
  "LEBANON",
  "LESOTHO",
  "LIBERIA",
  "LIBYAN ARAB JAMAHIRIYA",
  "LIECHTENSTEIN",
  "LITHUANIA",
  "LUXEMBOURG",
  "MACAO",
  "MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF",
  "MADAGASCAR",
  "MALAWI",
  "MALAYSIA",
  "MALDIVES",
  "MALI",
  "MALTA",
  "MARSHALL ISLANDS",
  "MARTINIQUE",
  "MAURITANIA",
  "MAURITIUS",
  "MAYOTTE",
  "MEXICO",
  "MICRONESIA, FEDERATED STATES OF",
  "MOLDOVA, REPUBLIC OF",
  "MONACO",
  "MONGOLIA",
  "MONTSERRAT",
  "MOROCCO",
  "MOZAMBIQUE",
  "MYANMAR",
  "NAMIBIA",
  "NAURU",
  "NEPAL",
  "NETHERLANDS",
  "NETHERLANDS ANTILLES",
  "NEW CALEDONIA",
  "NEW ZEALAND",
  "NICARAGUA",
  "NIGER",
  "NIGERIA",
  "NIUE",
  "NORFOLK ISLAND",
  "NORTHERN MARIANA ISLANDS",
  "NORWAY",
  "OMAN",
  "PAKISTAN",
  "PALAU",
  "PALESTINIAN TERRITORY, OCCUPIED",
  "PANAMA",
  "PAPUA NEW GUINEA",
  "PARAGUAY",
  "PERU",
  "PHILIPPINES",
  "PITCAIRN",
  "POLAND",
  "PORTUGAL",
  "PUERTO RICO",
  "QATAR",
  "RÉUNION",
  "ROMANIA",
  "RUSSIAN FEDERATION",
  "RWANDA",
  "SAINT HELENA",
  "SAINT KITTS AND NEVIS",
  "SAINT LUCIA",
  "SAINT PIERRE AND MIQUELON",
  "SAINT VINCENT AND THE GRENADINES",
  "SAMOA",
  "SAN MARINO",
  "SAO TOME AND PRINCIPE",
  "SAUDI ARABIA",
  "SENEGAL",
  "SERBIA AND MONTENEGRO",
  "SEYCHELLES",
  "SIERRA LEONE",
  "SINGAPORE",
  "SLOVAKIA",
  "SLOVENIA",
  "SOLOMON ISLANDS",
  "SOMALIA",
  "SOUTH AFRICA",
  "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
  "SPAIN",
  "SRI LANKA",
  "SUDAN",
  "SURINAME",
  "SVALBARD AND JAN MAYEN",
  "SWAZILAND",
  "SWEDEN",
  "SWITZERLAND",
  "SYRIAN ARAB REPUBLIC",
  "TAIWAN, PROVINCE OF CHINA",
  "TAJIKISTAN",
  "TANZANIA, UNITED REPUBLIC OF",
  "THAILAND",
  "TIMOR-LESTE",
  "TOGO",
  "TOKELAU",
  "TONGA",
  "TRINIDAD AND TOBAGO",
  "TUNISIA",
  "TURKEY",
  "TURKMENISTAN",
  "TURKS AND CAICOS ISLANDS",
  "TUVALU",
  "UGANDA",
  "UKRAINE",
  "UNITED ARAB EMIRATES",
  "UNITED KINGDOM",
  "UNITED STATES",
  "UNITED STATES MINOR OUTLYING ISLANDS",
  "URUGUAY",
  "UZBEKISTAN",
  "VANUATU",
  "Vatican City State see HOLY SEE",
  "VENEZUELA",
  "VIET NAM",
  "VIRGIN ISLANDS, BRITISH",
  "VIRGIN ISLANDS, U.S.",
  "WALLIS AND FUTUNA",
  "WESTERN SAHARA",
  "YEMEN",
  "ZAMBIA",
  "ZIMBABWE",
];
export const country2 = [
  "AF",
  "AX",
  "AL",
  "DZ",
  "AS",
  "AD",
  "AO",
  "AI",
  "AQ",
  "AG",
  "AR",
  "AM",
  "AW",
  "AU",
  "AT",
  "AZ",
  "BS",
  "BH",
  "BD",
  "BB",
  "BY",
  "BE",
  "BZ",
  "BJ",
  "BM",
  "BT",
  "BO",
  "BA",
  "BW",
  "BV",
  "BR",
  "IO",
  "BN",
  "BG",
  "BF",
  "BI",
  "KH",
  "CM",
  "CA",
  "CV",
  "KY",
  "CF",
  "TD",
  "CL",
  "CN",
  "CX",
  "CC",
  "CO",
  "KM",
  "CG",
  "CD",
  "CK",
  "CR",
  "CI",
  "HR",
  "CU",
  "CY",
  "CZ",
  "DK",
  "DJ",
  "DM",
  "DO",
  "EC",
  "EG",
  "SV",
  "GQ",
  "ER",
  "EE",
  "ET",
  "FK",
  "FO",
  "FJ",
  "FI",
  "FR",
  "GF",
  "PF",
  "TF",
  "GA",
  "GM",
  "GE",
  "DE",
  "GH",
  "GI",
  "GR",
  "GL",
  "GD",
  "GP",
  "GU",
  "GT",
  "GN",
  "GW",
  "GY",
  "HT",
  "HM",
  "VA",
  "HN",
  "HK",
  "HU",
  "IS",
  "IN",
  "ID",
  "IR",
  "IQ",
  "IE",
  "IL",
  "IT",
  "JM",
  "JP",
  "JO",
  "KZ",
  "KE",
  "KI",
  "KP",
  "KR",
  "KW",
  "KG",
  "LA",
  "LV",
  "LB",
  "LS",
  "LR",
  "LY",
  "LI",
  "LT",
  "LU",
  "MO",
  "MK",
  "MG",
  "MW",
  "MY",
  "MV",
  "ML",
  "MT",
  "MH",
  "MQ",
  "MR",
  "MU",
  "YT",
  "MX",
  "FM",
  "MD",
  "MC",
  "MN",
  "MS",
  "MA",
  "MZ",
  "MM",
  "NA",
  "NR",
  "NP",
  "NL",
  "AN",
  "NC",
  "NZ",
  "NI",
  "NE",
  "NG",
  "NU",
  "NF",
  "MP",
  "NO",
  "OM",
  "PK",
  "PW",
  "PS",
  "PA",
  "PG",
  "PY",
  "PE",
  "PH",
  "PN",
  "PL",
  "PT",
  "PR",
  "QA",
  "RE",
  "RO",
  "RU",
  "RW",
  "SH",
  "KN",
  "LC",
  "PM",
  "VC",
  "WS",
  "SM",
  "ST",
  "SA",
  "SN",
  "CS",
  "SC",
  "SL",
  "SG",
  "SK",
  "SI",
  "SB",
  "SO",
  "ZA",
  "GS",
  "ES",
  "LK",
  "SD",
  "SR",
  "SJ",
  "SZ",
  "SE",
  "CH",
  "SY",
  "TW",
  "TJ",
  "TZ",
  "TH",
  "TL",
  "TG",
  "TK",
  "TO",
  "TT",
  "TN",
  "TR",
  "TM",
  "TC",
  "TV",
  "UG",
  "UA",
  "AE",
  "GB",
  "US",
  "UM",
  "UY",
  "UZ",
  "VU",
  "VA",
  "VE",
  "VN",
  "VG",
  "VI",
  "WF",
  "EH",
  "YE",
  "ZM",
  "ZW",
];
export const arrWord = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const randomString = () => {
  var str = `${arrWord[Math.floor(Math.random() * 24)]}`
  for (let i = 0; i < 6; i++) {
    str = `${str}${arrWord[Math.floor(Math.random() * 35)]}`
  }
  return str;
}

// export const coverTextTime = (id: string, item: number, enter: number) => {
//   var arr = document.querySelectorAll(".class-" + id + ".time-tkb");
//   var time1_ = (arr[item] as HTMLInputElement).value;
//   time1_ = time1_.replace(/[^0-9:]/g, "");
//   var time1 = parseInt(time1_)
//   if (enter === 16) {
//     return time1;
//   }
//   if (enter === 8 || enter === 46) {
//     return time1;
//   }
//   if (enter === 13) {
//     if (time1_.length === 1) {
//       time1 = "0" + time1 + ":00";
//     } else if (time1_.length === 2) {
//       if (time1 > 23) {
//         time1_ = "23:"
//       } else if (time1 < 0) {
//         time1_ = "00:00"
//       } else {
//         time1_ += ":00";
//       }
//     } else if (time1_.length === 3) {
//       time1_ += "00";
//     } else if (time1_.length === 4) {
//       var x = time1_.split(":");
//       time1_ = x[0] + ":0" + x[1];
//     } else if (time1_.length === 5) {
//       var list = time1_.split(":");
//       if (list[1] < 0) {
//         time1 = x[0] + ":00";
//       } else if (list[1] > 59) {
//         time1 = x[0] + ":59";
//       } else {
//         time1 = time1;
//       }
//     }
//   } else {
//     if (time1.length == 1) {
//       if (time1 == ":") {
//         time1 = "00:";
//       }
//     } else if (time1.length == 2) {
//       if (time1.indexOf(":") != -1) {
//         time1 = "0" + time1;
//       } else if (time1 > 23) {
//         time1 = "23:"
//       } else if (time1 < 0) {
//         time1 = "00:"
//       } else {
//         time1 += ":";
//       }
//     } else if (time1.length == 5) {
//       var x = time1.split(":");
//       if (x[1] < 10) {
//         time1 = x[0] + ":" + x[1];
//       } else if (x[1] > 59) {
//         time1 = x[0] + ":59";
//       } else {
//         time1 = time1;
//       }
//     }
//   }
//   return time1;
// }