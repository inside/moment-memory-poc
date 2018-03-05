const moment = require('moment')

const lang = 'fr'
const options = {
  fr: {
    monthsShort: [
      'jan', 'fév', 'mars',
      'avr', 'mai', 'juin',
      'juillet', 'août', 'sept',
      'oct', 'nov', 'déc',
    ],
    calendar: {
      lastDay: '[Hier], HH:mm',
      sameDay: `[Aujourd'hui], HH:mm`,
      lastWeek: null,
      nextDay: null,
      nextWeek: null,
      sameElse: 'DD MMM, HH:mm',
    },
  },
}

function printRSSUsage () {
  const rss = process.memoryUsage().rss
  console.log(`Program is using ${Math.floor(rss / 1000)} kilobytes of RAM.`)
}

// Call updateLocale every 5 milliseconds
const timer1 = setInterval(() => {
  moment.updateLocale('fr', options)
}, 5)

// Do garbage collection every 2 seconds
const timer2 = setInterval(() => {
  global.gc()
  printRSSUsage()
}, 2000)

// Set this timer to keep the program running
setInterval(() => {
  console.log('Is running.')
}, 3000)

process.on('SIGUSR2', () => {
  console.log('Clearing timers 1 and 2')
  clearInterval(timer1)
  clearInterval(timer2)
  global.gc()
  printRSSUsage()
})
