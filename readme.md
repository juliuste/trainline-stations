# trainline-stations

List of european railway stations. Wrapper module for [**trainline-eu/stations**](https://github.com/trainline-eu/stations).

[![npm version](https://img.shields.io/npm/v/trainline-stations.svg)](https://www.npmjs.com/package/trainline-stations)
[![License](https://img.shields.io/github/license/juliuste/trainline-stations.svg?style=flat)](license)
[![Contact me](https://img.shields.io/badge/contact-email-turquoise)](mailto:mail@juliustens.eu)

## Installation

```bash
npm install trainline-stations
```

## Usage

```js
const stations = require('trainline-stations')
console.log(stations)
```

```js
[
	{
		"id": "1",
		"name": "Château-Arnoux—St-Auban",
		"slug": "chateau-arnoux-st-auban",
		"latitude": "44.0817900000",
		"longitude": "6.0016250000",
		"country": "FR",
		"time_zone": "Europe/Paris",
		"is_city": true,
		"is_main_station": false,
		"is_airport": false,
		"is_suggestable": false,
		"country_hint": false,
		"main_station_hint": false,
		"sncf_id": "FRAAA",
		"sncf_is_enabled": true,
		"idtgv_is_enabled": false,
		"db_is_enabled": false,
		"busbud_is_enabled": false,
		"distribusion_is_enabled": false,
		"flixbus_is_enabled": false,
		"cff_is_enabled": false,
		"leoexpress_is_enabled": false,
		"obb_is_enabled": false,
		"ouigo_is_enabled": false,
		"trenitalia_is_enabled": false,
		"ntv_is_enabled": false,
		"hkx_is_enabled": false,
		"renfe_is_enabled": false,
		"atoc_is_enabled": false,
		"benerail_is_enabled": false,
		"westbahn_is_enabled": false,
		"sncf_self_service_machine": false,
		"normalised_code": "urn:trainline:public:nloc:csv1"
	}
	// …
}
```

## Contributing

If you found a bug or want to propose a feature, feel free to visit [the issues page](https://github.com/juliuste/trainline-stations/issues).
