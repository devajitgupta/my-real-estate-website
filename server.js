let express = require('express'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser');
const path = require('path');
const app = express()


// Routes to Handle Request
const userRoute = require('./routes/user.route')
const pageRoute = require('./routes/page.route')

// MongoDB Setup
mongoose.connect('mongodb+srv://devajitgupta:9455858543@cluster0.rpmmn5h.mongodb.net/bookstore?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("database connected successfully")

},
  error => {
    console.log("database error: " + error)
  }
);



// Setup Express.js
app.use(express.json());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
// Make "public" Folder Publicly Available
app.use('/public', express.static('public'))

// API Route
app.use('/api', userRoute)
app.use('/page', pageRoute)

// Error favicon.ico
app.get('/favicon.ico', (req, res) => res.status(204))

const port = process.env.PORT || 5000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
app.use(express.static(path.join(__dirname,'./dist')));

// Error
app.use((req, res, next) => {
  // Error goes via `next()` method
  setImmediate(() => {
    next(new Error('Something went wrong'))
  })
})

app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})
