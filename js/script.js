let menu = document.querySelector('#menu-btn')
let header = document.querySelector('.header')

menu.onclick = function () {
  menu.classList.toggle('fa-times')
  header.classList.toggle('active')
}

window.onscroll = function () {
  menu.classList.remove('fa-times')
  header.classList.remove('active')
}

const http = require('http')
const fs = require('fs')
const content = fs.readFileSync('index.html')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'text/text' })
  res.end(content)
})

server.listen(80, '127.0.0.1', () => {
  console.log('listing on port 80')
})
