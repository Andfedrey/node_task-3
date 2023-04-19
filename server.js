const http = require('http')

const requestForAPI = (url) => 
    http.get(url, (res) => {
    const {statusCode} = res;
    if(statusCode !== 200) {
      console.log(statusCode);
      return
    }
    res.setEncoding('utf-8')
    let dataRow = ''
    res.on('data', (chunk) => {
      dataRow += chunk
    })
  
    res.on('end', () => {
      let parseData = JSON.parse(dataRow)
      console.log(parseData);
    })
  }).on('error', (err) => {
    console.error(err);
  }) 

  module.exports = {requestForAPI}