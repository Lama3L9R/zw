import fs from 'fs'
import { resolve } from 'path'

export const resolvePages: (directory: string, filter?: (file) => boolean) => { prefix: string, children: string[] } = (directory, filter) => {
    return { prefix: directory, children: fs.readdirSync(resolve(__dirname, '../', directory)).filter(filter ?? ((i) => i.endsWith('.md')) ) }
}