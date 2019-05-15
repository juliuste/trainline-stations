'use strict'

const parse = require('csv-parse/lib/sync')
const got = require('got')

const build = async () => {
	const { body: csv } = await got.get('https://raw.githubusercontent.com/trainline-eu/stations/master/stations.csv')
	const stations = parse(csv, {
		columns: true,
		skip_empty_lines: true,
		delimiter: ';',
		cast: (value) => {
			if (value === '') return undefined
			if (value === 't') return true // @todo
			if (value === 'f') return false // @todo
			return value
		}
	})
	return stations
}

build()
	.then(stations => process.stdout.write(JSON.stringify(stations)))
	.catch(console.error)
