/**
 * Gets the day of the year for a given date.
 * @param {Date} currentDate - The date to get the day of year for.
 * @returns {number} The day of the year as an integer. 
*/
function getDayInYear(currentDate) {
    const jan1 = new Date(currentDate.getFullYear(), 0, 1)
    const dayOfYear = Math.floor((currentDate - jan1) / (24 * 60 * 60 * 1000)) + 1
    return dayOfYear
}

/**
 * Checks if a year is a leap year.
 * Leap years occur every 4 years, but years divisible by 100 are not leap
 * years unless they are also divisible by 400.
 * @param {number} year - The year to check.
 * @returns {boolean} True if the year is a leap year, false otherwise. 
*/
function isLeapYear(year) {
    return year % 100 === 0 && year % 400 !== 0 ? false : year % 4 === 0
}

/**
 * Gets the number of days left in the year for a given date. 
 * @param {Date} currentDate - The date to calculate days left for.
 * @returns {number} The number of days left in the year. 
*/
function daysToEndOfYear(currentDate) {
    const fullYearDays = isLeapYear(currentDate.getFullYear()) ? 366 : 365;
    const daysLeft = fullYearDays - getDayInYear(currentDate)
    return daysLeft
}

/**
 * 
 * Calculates the number of weeks remaining until the given maximum life 
 * expectancy, based on the current age and date.
 * @param {number} age - The current age.
 * @param {number} maxLife - The maximum expected life span.
 * @param {Date} currentDate - The date to base calculations from.
 * @returns {number} The total number of weeks until maximum life expectancy. 
*/
function weeksToEndOfLife(age, maxLife, currentDate) {
    const daysLeft = daysToEndOfYear(currentDate)
    const currentYear = currentDate.getFullYear()
    const yearsLeft = maxLife - age
    const years = Array.from({ length: yearsLeft }, (_, i) => currentYear + i)
    const totalDays = years.reduce((acc, year) => {
        const days = isLeapYear(year) ? 366 : 365
        return acc + days
    }, daysLeft)
    const totalWeeks = Math.ceil(totalDays / 7)
    return totalWeeks
}

/**
 * Calculates the total potato supply needed from the current date
 * until the maximum expected life span.
 * @param {number} age - The current age.
 * @param {number} maxLife - The maximum expected life span.
 * @param {number} amountPerWeek - The weekly potato quantity.
 * @param {Date} currentDate - The date to base calculations from.
 * @returns {number} The total potato supply needed. 
*/
function totalPotatoSupply(age, maxLife, amountPerWeek, currentDate) {
    const weeks = weeksToEndOfLife(age, maxLife, currentDate)
    const totalPotato = weeks * amountPerWeek
    return totalPotato
}

/**
 * Calculates the lifetime potato supply for a user and returns a string.
 * @param {string} name - The name of the user.
 * @param {number} age - The current age of the user.
 * @param {number} maxAge - The maximum expected age of the user.
 * @param {number} amountPerWeek - The weekly potato amount for the user.
 * @returns {string} A string with the user's name, age, total potatoes.
*/

function potatoCalculator(name, age, maxAge, amountPerWeek) {
    const currentDate = new Date()
    const totalPotato = totalPotatoSupply(age, maxAge, amountPerWeek, currentDate)
    return `${name.toUpperCase()} has ${age} years and will eat ${totalPotato} potatoes until age of ${maxAge}`
}

/**
 * Calls the potatoCalculator function for each user.
 * @param {Object[]} users - The array of user objects.
 * @returns {undefined}
 */
function potatoCalculatorUsers(users) {
    users.forEach(user => {
        const { name, age, maxAge, amountPerWeek } = user
        console.log(potatoCalculator(name, age, maxAge, amountPerWeek))
    });
}
const users = [
    {
        name: 'john',
        age: 45,
        maxAge: 100,
        amountPerWeek: 10
    },
    {
        name: 'jane',
        age: 25,
        maxAge: 80,
        amountPerWeek: 5
    },
    {
        name: 'bob',
        age: 35,
        maxAge: 90,
        amountPerWeek: 15
    }]

module.exports = {
    getDayInYear,
    isLeapYear,
    daysToEndOfYear,
    weeksToEndOfLife,
    totalPotatoSupply,
    potatoCalculator,
    potatoCalculatorUsers
}