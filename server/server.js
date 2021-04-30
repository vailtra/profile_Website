// For HTTP routing
import Express from 'express'

// Creating a new express instance
const app = new Express()

// Generic match to ALL requests and log them to the console
app.use((req, res, next) => {
  console.log(`${req.method} - ${req.path}`)
  next()
})

// Serve public folder statically
app.use(Express.static('public'))

// Start the server on port 3000
app.listen(8080, () => {
  console.log('Server listening on port 8080')
})