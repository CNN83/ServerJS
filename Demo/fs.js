// File System
const fs = require('fs')
const path = require('path')

/*
// Создание папки 'test' в нужной нам дериктори __dirname

fs.mkdir(path.join(__dirname, 'test'), (err) => {
  if (err) {
    throw err
  }

  console.log('Папка создана')
})
*/

/*
// Создаём файл 'test.txt' в папке 'test' в нужной нам дериктори __dirname в который записываем 'Hello nodeJS!'

const filePath = path.join(__dirname, 'test', 'test.txt')

// writeFile перезаписывает файл

fs.writeFile(filePath, 'Hello nodeJS!', err => {
  if (err) {
    throw err
  }

  console.log('Файл создан')
})


// appendFile дописывает в файл

fs.appendFile(filePath, '\nHello nodeJS!', err => {
  if (err) {
    throw err
  }

  console.log('Файл создан')
})
*/


// Считаем содержимое файла 'test.txt' в папке 'test' в нужной нам дериктори __dirname

const filePath = path.join(__dirname, 'test', 'test.txt')


// Вариант 1

// fs.readFile(filePath, (err, cotent) => {
//   if (err) {
//     throw err
//   }

//   const data = Buffer.from(cotent)
//   console.log('Содержимое файла = ', data.toString())
// })


// Вариант 1

fs.readFile(filePath, 'utf-8', (err, cotent) => {
  if (err) {
    throw err
  }

  console.log('Содержимое файла = ', cotent)
})