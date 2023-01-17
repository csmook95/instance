import { readFile } from "fs"

type Executor<T, E extends Error> = (
    resolve: (result: T) => void,
    reject: (error: E) => void
) => void

class Promise<T, E extends Error> {
    constructor(f: Executor<T, E>) { }
}

function readFilePromise(path: string): Promise<string> {
    return new Promise((resolve, reject) => {
        readFile(path, (error, result) => {
            if (error) reject(error)
            else resolve(result)
        })
    })
}