const express=require('express');
const app=express();
const con=require('./util/connection');

const insert_actor=require('./controller/all');
const insert_movie=require('./controller/all');
const insert_producer=require('./controller/all');
const asso_movie_producer=require('./controller/all');
const asso_movie_actor=require('./controller/all');


app.post('/insert_actor' ,insert_actor.insert_actor);
app.post('/insert_movie' ,insert_movie.insert_movie);
app.post('/insert_producer',insert_producer.insert_producer);
app.post('/asso_movie_actor' , asso_movie_actor.asso_movie_actor);
app.post('/asso_movie_producer' ,asso_movie_producer.asso_movie_producer);

app.listen(8000 , ()=>
{console.log(`Listening on Port ${8000}`);}
);