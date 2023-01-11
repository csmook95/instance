function formatInput(input: string) { }

function getUserInput(): string | number { return 1; }

let input = getUserInput()

formatInput(input as string)
formatInput(<string>input)

function addToList(list: string[], item: string) { }
addToList(`This is really` as any, `really unsafe`)

type Dialog1 = { id?: string }
function cloaseDialog(dialog: Dialog1) {
    if (!dialog.id) return
    setTimeout(() => removeFromDOM(dialog, document.getElementById(dialog.id!)!));
}
function removeFromDOM(dialog: Dialog1, element: Element) {
    element.parentNode!.removeChild(element)
    delete dialog.id
}

type VisibleDialog = { id: string }
type DestroyedDialog = {}
type Dialog2 = VisibleDialog | DestroyedDialog

function cloaseDialog2(dialog: Dialog2) {
    if (!(`id` in dialog)) return
    setTimeout(() => removeFromDOM2(dialog, document.getElementById(dialog.id)!));
}
function removeFromDOM2(dialog: VisibleDialog, element: Element) {
    element.parentNode!.removeChild(element)
    // delete dialog.id
}

let userId!: string
fetchUser()
userId.toUpperCase()
function fetchUser() { userId = `csmook95` }
