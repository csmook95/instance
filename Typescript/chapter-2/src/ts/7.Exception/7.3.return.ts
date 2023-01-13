function parse1(birthday: string | null): Date | InvalidDateFormatError | DateIsInTheFutureError {
    if (!birthday) return new Error(`입력하세요`);
    let date = new Date(birthday)
    if (!isValid(date)) return new InvalidDateFormatError(`Enter a date in the form YYYY/MM/DD`)
    if (date.getTime() > Date.now()) return new DateIsInTheFutureError(`Are you a timelaed?`)
    return date
}

let result = parse(ask())
if (result instanceof InvalidDateFormatError) console.error(result.message)
else if (result instanceof DateIsInTheFutureError) console.info(result.message)
else console.info(`Date is `, result.toISOString())

