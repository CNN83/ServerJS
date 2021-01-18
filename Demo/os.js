const os = require('os')

console.log('Операционная система: ', os.platform())
console.log('Архитектура поцессора: ', os.arch())
console.log('Информация по процессорам: ', os.cpus())
console.log('Кол-во памяти: ', os.totalmem())
console.log('Кол-во свободной памяти: ', os.freemem())
console.log('Домашняя директория: ', os.homedir())
console.log('Как долго работает компьютер в секундах: ', os.uptime())