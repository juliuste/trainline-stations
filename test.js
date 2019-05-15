'use strict'

const tapeWithoutPromise = require('tape')
const addPromiseSupport = require('tape-promise').default
const tape = addPromiseSupport(tapeWithoutPromise)

const trainlineStations = require('.')

tape('trainline-stations', t => {
	t.ok(Array.isArray(trainlineStations))
	t.ok(trainlineStations.length > 30000)
	t.ok(trainlineStations.filter(s => !!s.db_id).length > 10000)
	const gdansk = trainlineStations.find(s => s.db_id === '5100009')
	t.ok(!!gdansk)
	t.ok(gdansk.slug === 'gdansk-glowny')
	t.end()
})
