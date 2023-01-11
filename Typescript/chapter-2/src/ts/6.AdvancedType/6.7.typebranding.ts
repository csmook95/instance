type CompanyID = string & { readonly brand: unique symbol }
type OrderID = string & { readonly brand: unique symbol }
type UserID = string & { readonly brand: unique symbol }
type ID = CompanyID | OrderID | UserID

function CompanyID(id: string) { return id as CompanyID }
function OrderID(id: string) { return id as OrderID }
function UserID(id: string) { return id as UserID }

function queryForUser(id: UserID) { }

let companyId1 = CompanyID(`aaaaaaa`)
let orderId1 = OrderID(`aaaaaaa`)
let userId1 = UserID(`aaaaaaa`)
// queryForUser(companyId1)
queryForUser(userId1)