export const timeTransform = function (date = 0, duration = 0) {
  const hoursDuration = `${Math.floor(duration / 60)}`.padStart(2, '0')
  const minDuration = `${duration - hoursDuration * 60}`.padStart(2, '0')

  const dateEndString = new Date(Date.parse(date) + duration * 60 * 1000).toISOString()
  const startTime = date.slice(11, 16)
  const endTime = dateEndString.slice(11, 16)

  return {
    startTime,
    endTime,
    hoursDuration,
    minDuration,
  }
}

export const stopTransform = function (stops) {
  if (stops.length === 0) return { stopsString: '', head: 'без пересадок' }
  if (stops.length === 1) return { stopsString: stops, head: '1 пересадка' }

  let stopsString = stops.reduce((acc, item) => {
    acc += `${item}, `
    return acc
  }, '')
  stopsString = stopsString.slice(0, -2)
  return { stopsString, head: `${stops.length} пересадки` }
}
