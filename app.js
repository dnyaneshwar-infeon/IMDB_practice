const express=require('express');
const app=express();
const con=require('./util/connection');

const insert_actor=require('./controller/all');
const insert_movie=require('./controller/all');
const insert_producer=require('./controller/all');
const asso_movie_actor=require('./controller/all');
const movie_producer=require('./controller/all');
const insert_fan=require('./controller/all');
const give_rating=require('./controller/all');
const get_rating=require('./controller/all');


app.post('/insert_actor' ,insert_actor.insert_actor);
app.post('/insert_movie' ,insert_movie.insert_movie);
app.post('/insert_producer',insert_producer.insert_producer);
app.post('/asso_movie_actor' , asso_movie_actor.asso_movie_actor);
app.post('/movie_producer',movie_producer.insert_producer);
app.post('/insert_fan' ,insert_fan.insert_fan);
app.post('/give_rating' , give_rating.give_rating);
app.get('/get_rating' , get_rating.get_rating);

app.listen(8000 , ()=>
{console.log(`Listening on Port ${8000}`);}
);