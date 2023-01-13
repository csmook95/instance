import { readFile } from "fs";


readFile(`/var/log/apache2/access_log`,
    { encoding: `utf8` },
    (error, data) => {
        if (error) {
            console.error(`error reading!`, error)
            return
        }
        console.info(`success reading!`, data)
    }
)
