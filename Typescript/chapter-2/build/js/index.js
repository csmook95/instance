function ask() {
    return prompt("When is your birthday?");
}
function parse(birthday) {
    if (!birthday)
        return null;
    var date = new Date(birthday);
    if (!isValid(date))
        return null;
    return date;
}
function isValid(date) {
    return Object.prototype.toString.call(date) === "[object Date]" && !Number.isNaN(date.getTime());
}
var date = parse(ask());
if (date)
    console.info("Date is", date.toISOString());
else
    console.error("Error parsing date for some reason");
