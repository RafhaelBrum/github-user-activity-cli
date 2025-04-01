#!/usr/bin/env node

import getData from './commands/fetchActivity';

const user: string = process.argv[2]

let url: string = `https://api.github.com/users/${ user }/events`

getData(url)


