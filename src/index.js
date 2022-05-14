import { parse } from 'csv-parse'
import got from 'got'

export const collect = async (iterator) => {
	const items = []
	for await (const item of iterator) { items.push(item) }
	return items
}

export default () => got
	.stream('https://raw.githubusercontent.com/trainline-eu/stations/master/stations.csv')
	.pipe(parse({
		columns: true,
		skip_empty_lines: true,
		delimiter: ';',
		cast: (value) => {
			if (value === '') return undefined
			if (value === 't') return true // @todo
			if (value === 'f') return false // @todo
			return value
		},
	}))
