type Weekday = `Mon` | `Tue` | `Wed` | `Thu` | `Fri`
type Day = Weekday | `Sat` | `Sun`

function getNextDay(w: Weekday): Day {
    switch (w) {
        case `Mon`: return `Tue`
        case `Tue`: return `Wed`
        case `Wed`: return `Thu`
        case `Thu`: return `Fri`
        case `Fri`: return `Mon`
    }
}

let nextDay = { Mon: `Tue` }
nextDay.Mon