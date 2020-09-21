const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const PORT = 8080 || process.env.PORT;

const MOVIES = [
    {
        id: 1,
        name: "Forest Gump",
        rating: 8.8
    },
    {
        id: 2,
        name: "Interstellar",
        rating: 9.1
    },
    {
        id: 3,
        name: "Fight Club",
        rating: 9.3
    },
    {
        id: 4,
        name: "Inception",
        rating: 9.5
    },
    {
        id: 5,
        name: "Avengers",
        rating: 8.5
    }
]

// Global Route
app.get('/', (req,res)=> {
    res.send("hey man!!")
});

// Get all Movies
app.get('/movies', (req,res) => {
    res.send({
        msg: 'List of all Movies',
        movies: MOVIES
    })
});

// Get single Movie

app.get('/movie/:id', (req,res) => {
    const id = req.params.id;
    const movie = MOVIES.filter(movie => movie.id === +id);
    res.status(200).send({
        msg: 'Seletced Movie',
        movie
    });
});

// Create new Movie
app.post('/movies', async (req,res) => {
    const { name, id, rating } = req.body;
    const newMovie = {name,id,rating}
    MOVIES.push(newMovie);
    res.status(201).send({
        msg: 'Added new Movie',
        movies: MOVIES
    })
})

// Update single Movie
app.put('/movie/:id', (req,res) => {
    const id = req.params.id;
    const {rating} = req.body;
    if(!rating) {
        res.status(401).send({
            msg: 'Please provide rating',
            movie
        })
    };
    const updatedMovie = MOVIES.map(movie => {
        if(movie.id === +id) {
            movie.rating = rating;
            return movie
        } else {
            return movie
        }
    });
    res.status(201).send({
        msg: 'Updated Movie',
        movies: updatedMovie
    })
});

// Delete single Movie
app.delete('/movie/:id', (req,res) => {
    const id = +(req.params.id);
    const index = MOVIES.findIndex(movie => movie.id === id);
    MOVIES.splice(index,1)
    res.status(201).send({
        msg: 'Removed Movie',
        movies: MOVIES
    })
});


app.listen(PORT, () => console.log("App is up and running on port", PORT))