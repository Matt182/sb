import mongoose from 'mongoose';

const { Schema } = mongoose;

const ComputerSchema = new Schema({
  board: {
    vendor: String,
    model: String,
    cpu: {
      model: String,
      hz: Number,
    },
    image: String,
    video: String,
    ram: {
      vendor: String,
      volume: Number,
      pins: Number,
    },
    os: String,
    floppy: Number,
    hdd: [
      {
        vendor: String,
        size: Number,
        volume: String,
      },
    ],
    monitor: String,
    length: Number,
    height: Number,
    width: Number,
  },
});

export default mongoose.model('Computer', ComputerSchema);
