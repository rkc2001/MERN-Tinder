//DATABASE SCHEMA
//This is basically an outline structure of the cards inside our DB ... the Tinder Cards
import mongoose from 'mongoose'

//This is how our DB fields are gonna be created
const cardSchema = mongoose.Schema({
  name: String,
  imgUrl: String
})

//.model(<define collection name>,<model schema>)
export default mongoose.model('cards',cardSchema);