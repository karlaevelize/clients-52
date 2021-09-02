const axios = require("axios")

async function getData(){
  try {
    const response = await axios.get(`google.com`)
    console.log(response)
  } catch (error) {
    console.log(error.message)
  }
}

// getData()

async function getQuotes(){
  try {
    const response = await axios.get('https://quotes.rest/qod?language=en')
    console.log(response.data.contents)
  } catch (error) {
    console.log(error.message)
  }
}

// getQuotes()

async function getOurApi(){
  try {
    const response = await axios.get('http://localhost:4001/student/1')
    console.log(response.data)
  } catch (error) {
    console.log(error.message)
  }
}

getOurApi()