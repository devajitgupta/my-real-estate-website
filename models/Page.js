const mongoose = require('mongoose');
const Schema = mongoose.Schema

let pageSchema = new Schema(
  {
    page:{
      type:String
    }
},
  {
    collection: 'pages',
  },
)
module.exports = mongoose.model('Page', pageSchema)
