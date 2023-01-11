type APIResponse = {
    user: {
        userId: string
        friendList: {
            count: number
            friends: {
                firstName: string
                lastName: string
            }[]
        }
    }
}
type FriendList = APIResponse[`user`][`friendList`]

const res: APIResponse = {
    user: {
        userId: `csmook95`,
        friendList: {
            count: 1,
            friends: [{
                firstName: `Seungmook`,
                lastName: `Choi`
            }]
        }
    }
}

function getAPIResponse(): Promise<APIResponse> {
    return new Promise(() => { });
}
function renderFriendList(friendList: FriendList) { }

let response = res;
renderFriendList(response.user.friendList)

type ResponseKeys = keyof APIResponse
type UserKeys = keyof APIResponse[`user`]
type FriendListKeys = keyof APIResponse[`user`][`friendList`]

function get<
    O extends object,
    K extends keyof O
>(o: O, k: K): O[K] {
    return o[k]
}

type ActivityLog = {
    lastEvent: Date
    events: {
        id: string
        timestamp: Date
        type: `Read` | `Write`
    }[]
}

let activityLog: ActivityLog = {
    lastEvent: new Date(),
    events: [{
        id: `csmook95`,
        timestamp: new Date(),
        type: `Read`
    }]
}
let lastEvent = get(activityLog, `lastEvent`)
console.log(lastEvent)

type Get1 = {
    <O extends object,
        K1 extends keyof O>(o: O, k1: K1): O[K1]
    <O extends object,
        K1 extends keyof O,
        K2 extends keyof O[K1]>(o: O, k1: K1, k2: K2): O[K1][K2]
    <O extends object,
        K1 extends keyof O,
        K2 extends keyof O[K1],
        K3 extends keyof O[K1][K2]>(o: O, k1: K1, k2: K2, k3: K3): O[K1][K2]
}

let get1: Get1 = (object: any, ...keys: string[]) => {
    let result = object
    keys.forEach(e => result = result[e]);
    return result
}

get1(activityLog, `events`, 0, `type`)
// get1(activityLog, `bad`)

let nextDay1: Record<Weekday, Day> = {
    Mon: `Tue`,
    Tue: `Wed`,
    Wed: `Thu`,
    Thu: `Fri`,
    Fri: `Sat`
}

let nextDay2: { [K in Weekday]: Day } = {
    Mon: `Tue`,
    Tue: `Wed`,
    Wed: `Thu`,
    Thu: `Fri`,
    Fri: `Sat`
}

type Account = {
    id: number
    isEmployee: boolean
    notes: string[]
}

type OptionalAccount = {
    [K in keyof Account]?: Account[K]
}

type NullableAccount = {
    [K in keyof Account]: Account[K] | null
}

type ReadonlyAccount = {
    readonly [K in keyof Account]: Account[K]
}

type Account2 = {
    -readonly [K in keyof ReadonlyAccount]: Account[K]
}

type Account3 = {
    [K in keyof OptionalAccount]-?: Account[K]
}


type Currency = {
    unit: `EUR` | `GBP` | `JPY` | `USD`
    value: number
}

// let Currency = {
//     DEFAULT: `USD`,
//     from(value: number, unit = Currency.DEFAULT): Currency {
//         return { unit, value }
//     }
// }
