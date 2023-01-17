import { appendFile, readFile } from "fs";

readFile(
    `./src/files/exam.txt`,
    { encoding: `utf8` },
    (error, data) => {
        if (error) {
            console.error(`error reading!`, error)
            return
        }
        console.info(`success reading! \n`, data)
    })

appendFile(`./src/files/exam.txt`,
    `New access log entry`,
    error => {
        if (error) console.error(`error writing!`, error)
    })