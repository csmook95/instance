function ask() {
    return prompt(`When is your birthday?`)
}

class InvalidDateFormatError extends RangeError { }
class DateIsInTheFutureError extends RangeError { }

/**
 * 
 * @param birthday 
 * @returns 
 */
function parse(birthday: string | null): Date {
    if (!birthday) throw new RangeError(`입력하세요`);
    let date = new Date(birthday)
    if (!isValid(date)) throw new InvalidDateFormatError(`Enter a date in the form YYYY/MM/DD`)
    if (date.getTime() > Date.now()) throw new DateIsInTheFutureError(`Are you a timelaed?`)
    return date
}

function isValid(date: Date) {
    return Object.prototype.toString.call(date) === `[object Date]` && !Number.isNaN(date.getTime())
}

try {
    let date = parse(ask())
    console.info(`Date is`, date.toISOString());
} catch (e) {
    if (e instanceof InvalidDateFormatError) console.log(e.message)
    if (e instanceof DateIsInTheFutureError) console.info(e.message)
    else throw e
}