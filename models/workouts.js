const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {type: Date, default: Date.now},
    exercises:
    [
            {
            type: {
                type: String,
                trim: true,
                enum:["Resistance", "resistance", "Cardio", "cardio"],
                required: "Enter Resistance or Cardio"
            },
            name: {
                type: String,
                required: "Enter name of exercise"
            },
            duration: {
                type: Number,
                required: "Enter how long the exercise should take",
                min: [1, "Even Flash Gordon has to enter more than 1 minute."]
            },
            distance: {
                type: Number,
                required: "Enter how far you go.",
                min: [1, "Entering 0 is cheating. DON'T BE A CHEATER!"]
            },
            weight: {
                type: Number,
                required: "How much can you lift, Bro?",
                min: [1, "Really? How are you going to do resistance training without resistance?"]
            },
            reps: {
                type: Number,
                required: "Enter how many times you will be repeating this exercise.",
                min: [1, "Come on! You can do it at least once."],
            },
            sets: {
                type: Number,
                required: "Enter how many sets",
                min: [1, "You have to do it at least one time."]
            }
        }
    ]
});
const Workout = mongoose.model('Workouts', workoutSchema);

module.exports = Workout;