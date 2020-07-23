//jshint esversion:6

const app = require('express')()
const bodyParser = require('body-parser')
const logger = require('morgan')

const port = process.env.PORT || 3030

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('*', (req, res) => {
  res.send('This is tutorial App on creating your first USSD app in 5 minutes or less by Ajala Abdulsamii <kgasta@gmail.com>')
})

app.post('*', (req, res) => {
  let {sessionId, serviceCode, phoneNumber, text} = req.body
  if (text == '') {
    // This is the first request. Note how we start the response with CON
    let response = `CON Choose 1 to REGISTER
    1. Register`
    res.send(response)
  } else if (text == '1') {
    // Business logic for first level response
    let response = `CON Which actor are you ?
    1. Farmer
    2. Transport
    3. Wholesaler`
    res.send(response)
  } else if (text == '1') {
    // Business logic for first level response
    let response = `CON Please enter your name`
    res.send(response)

  } else if (text == '1*1') {
    // Business logic for first level response
    let response = `CON Please enter your name`
    if(text == '1*1'){

    }
    res.send(response)
  } else if (text == '1*2') {
    // This is a second level response where the user selected 1 in the first instance

    // This is a terminal request. Note how we start the response with END
    let response = `CON Plese enter full name`
    res.send(response)
  }else if (text == '1*3') {
    // This is a second level response where the user selected 1 in the first instance

    // This is a terminal request. Note how we start the response with END
    let response = `CON Plese enter full name`
    res.send(response)
  }else {
    res.status(400).send('Bad request!')
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
