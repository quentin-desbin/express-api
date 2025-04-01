import app from './app.js'

const port = 3000
const hostname = '0.0.0.0'

// Start the server on given port and hostname, for production should be stored in .env files
app.listen(port, hostname, () => {
    console.log('Executed when server is started')
})
