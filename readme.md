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

The module allows you to retrieve the station data in two different ways:

### Dynamically fetch the latest dataset

The default method exposed by `trainline-stations` returns an async iterator containing the latest station dataset (note that the request to fetch the latest data might take a few seconds):

```js
import fetchStations, { collect } from 'trainline-stations'

// consume the async iterator
for await (const station of fetchStations()) {
	console.log(station)
}

// the module also exposes a helper to collect the iterator,
// in case you just want to retrieve an array of all stations
const allStations = await collect(fetchStations())
```

The individual station objects look as follows. Note that key names might change when the [upstream dataset](https://github.com/trainline-eu/stations) gets updated, and that not every key is present on every station. This library also does not perform any schema validation for the individual entries, that needs to be done on your side.

```js
{
	id: '7',
	name: 'La Crau',
	slug: 'la-crau',
	uic: '8775561',
	uic8_sncf: '87755611',
	latitude: '43.1449352',
	longitude: '6.0687663',
	country: 'FR',
	time_zone: 'Europe/Paris',
	is_city: false,
	is_main_station: false,
	is_airport: false,
	is_suggestable: true,
	country_hint: false,
	main_station_hint: false,
	sncf_id: 'FRAAC',
	sncf_tvs_id: 'LUV',
	sncf_is_enabled: true,
	entur_is_enabled: false,
	db_id: '8703562',
	db_is_enabled: false,
	busbud_is_enabled: false,
	distribusion_is_enabled: false,
	flixbus_is_enabled: false,
	cff_is_enabled: false,
	leoexpress_is_enabled: false,
	obb_id: '8703562',
	obb_is_enabled: false,
	ouigo_is_enabled: false,
	trenitalia_is_enabled: false,
	ntv_is_enabled: false,
	hkx_is_enabled: false,
	renfe_is_enabled: false,
	atoc_is_enabled: false,
	benerail_is_enabled: false,
	westbahn_is_enabled: false,
	sncf_self_service_machine: false,
	'info:ru': 'Ла-Кро',
	'info:zh': '拉克罗',
	normalised_code: 'urn:trainline:public:nloc:csv7',
}
```

### Use a static dataset

The library also bundles a static dataset that is generated every time the library gets published to npm. You can use this dataset instead of fetching the most up-to-date stations as described above, if you don't mind that the dataset is potentially outdated, or - this probably makes more sense - as a fallback, in case the request for the latest dataset fails.

The static dataset can be used as follows:

```js
// importing this file synchronously might block your program for multiple seconds
import staticStations from 'trainline-stations/src/static.js'
console.log(staticStations)
```

## Contributing

If you found a bug or want to propose a feature, feel free to visit [the issues page](https://github.com/juliuste/trainline-stations/issues).
