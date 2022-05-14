import test from 'ava'

import fetchStations, { collect } from './index.js'
import staticStations from './static.js'

test('trainline-stations (static)', async t => {
	t.true(Array.isArray(staticStations))
	t.true(staticStations.length > 30000)
	t.true(staticStations.filter(s => !!s.db_id).length > 10000)
	const gdansk = staticStations.find(s => s.db_id === '5100009')
	t.true(!!gdansk)
	t.true(gdansk.slug === 'gdansk-glowny')
})

test('trainline-stations (latest)', async t => {
	const latestStations = await collect(fetchStations())
	t.true(Array.isArray(latestStations))
	t.true(latestStations.length > 30000)
	t.true(latestStations.filter(s => !!s.db_id).length > 10000)
	const gdansk = latestStations.find(s => s.db_id === '5100009')
	t.true(!!gdansk)
	t.true(gdansk.slug === 'gdansk-glowny')
})
