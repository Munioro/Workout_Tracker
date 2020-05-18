const router = require('express').Router();
const Workouts = require('../models/workouts');

router.get('/api/workouts', (req, res) => {
    Workouts.find({})
    .then(dbworkouts => {
        res.json(dbworkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put('/api/workouts/:id', (req, res) => {
    Workouts.findByIdAndUpdate({_id}, {body})
    .then(dbworkouts => {
        res.json(dbworkouts);
    }).catch (err => {
        res.json(err)
    })
});
router.post('/api/workouts', ({body}, res) => {
    Workouts.create(body)
    .then(dbworkouts => {
        res.json(dbworkouts);
    })
    .catch(err => {
        res.status(400).json(err)
    });
});

module.exports = router;

