//---------------------------------------------------[ date&time ]---------------------------------------------
// stocare=numar(milisecunde)
// 0->prezent
// <0->trecut
let now = new Date('January 21 2001 6:25:01')
// now = new Date()
console.log('DATE:', now.toString())
console.log('NR:', now.getTime())
console.log('Year:', now.getFullYear())
console.log('Month:', now.getMonth())
console.log('Date:', now.getDate())
console.log('Hour:', now.getHours())
console.log('Min:', now.getMinutes())
console.log('Sec:', now.getSeconds())

const timestamp = now.getTime()

const myDate = new Date(timestamp)
console.log(myDate.getFullYear())


// -------------------------------------------->MOMENT
 now = moment()
console.log(now.toString())
now.minute(1)
now.add(1, 'year').subtract(20,'days')
console.log(now.format('MMMM Do, YYYY'))
console.log(now.fromNow())
const nowTimestamp = now.valueOf()
console.log(moment(nowTimestamp).toString())

const birthday = moment()
birthday.year(2000).month(9).date(19)
console.log(birthday.format('MMM D, YYYY'))