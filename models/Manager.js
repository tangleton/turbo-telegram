import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const managerSchema = new Schema({
    name:  String,
    email: String,
    phone:   String,
    managers: [{ type: Schema.Types.ObjectId, ref: 'Story' }],
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });

export default Manager = mongoose.model('Manager', managerSchema);
