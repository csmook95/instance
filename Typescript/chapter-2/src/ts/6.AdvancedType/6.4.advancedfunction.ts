function tuple<T extends unknown[]>(...ts: T): T {
    return ts
}
let a3 = tuple(1, true);

function isString(a: unknown): a is string {
    return typeof a === `string`
}
console.log(isString(`a`))
console.log(isString([7]))

function parseInput(input: string | number) {
    let formattedInput: String
    if (isString(input)) formattedInput = input.toUpperCase()
}

type LegacyDialog = {
    type: `LegacyDialog`
    name: string
}
type Dialog = {
    type: `Dialog`
    name: string
    age: number
}

function isLegacyDialog(dialog: LegacyDialog | Dialog): dialog is LegacyDialog {
    return dialog.type === `LegacyDialog`;
}

function exam(dialog: Dialog| LegacyDialog) {
    if(isLegacyDialog(dialog)) dialog
    else dialog
}
