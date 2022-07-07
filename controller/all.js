const { execFileSync } = require("child_process");
const con = require("../util/connection");

const insert_actor=function(req , res)
{
    var name=req.query.act_name;
    var dob=req.query.act_dob;
    var nation=req.query.act_nation;
    var sql="insert into actors (act_name , act_dob , act_nation) values(?,?,?)";
    con.query(sql ,[name , dob , nation], function(error , result)
    {
        if(error)
        {
            throw error;
        }
        else
        {
            res.json(result);
        }

    })
}

const insert_movie=function(req , res)
{
    var name=req.query.movie_name;
    var date=req.query.movie_date;
    var sum=req.query.movie_summery;
    var sql="insert into movies (movie_name , movie_date , movie_summery)values(?,?,?)";
    con.query(sql,[name,date,sum],function(error , result)
    {
        if(error)
        {
            throw error;
        }
        else
        {
            res.json(result);
        }
    })
}
const insert_producer=function(req ,res)
{
    var name=req.query.pro_name;
    var nation=req.query.pro_nation;
    var date=req.query.pro_dob;
    var sql="insert into producer (pro_name , pro_nation, pro_dob)values(?,?,?)";
    con.query(sql,[name , nation , date], function(error , result)
    {
        if(error)
        {
            throw error;
        }
        else
        {
            res.json(result);
        }
    })
}
const asso_movie_actor=function(req ,res)
{
    var act=req.query.act_id;
    var movie=req.query.movie_id;
    var role=req.query.role;
    var sql="insert into movie_actor(act_id , movie_id , role)values(?,?,?)";
    con.query(sql,[act,movie,role],function(error,result)
    {
        if(error)
        {
            throw error;
        }
        else
        {
            res.json(result);
        }
    })
}
const movie_producer=function(req , res)
{
    var movie=req.query.movie_id;
    var pro=req.query.pro_id;
    var sql="insert into movie_producer(movie_id , pro_id)values(?,?)";
    con.query(sql ,[movie,pro],function(error , resu)
    {
        if(error)
        {
            throw error;
        }
        else{
            res.json(result);
        }
    })

}
const insert_fan=function(req , res)
{
    var uname=req.query.user_name;
    var sql="insert into fan(user_name)values(?)";
    con.query(sql,[uname],function(error,result){
        if(error)
        {
            throw error;
        }
        else
        {
            res.json(result);
        }
    })
}
const give_rating=function(req,res)
{
    var user=req.query.user_id;
    var movie=req.query.movie_id;
    var rating=req.query.rating;
    var sql="insert into fan_rating(user_id , movie_id , rating)values(?,?,?)";
    con.query(sql ,[user,movie,rating],function(error,result)
    {
        if(error)
        {
            throw error;
        }
        else
        {
            res.json(result);
        }
    })

}
const get_rating=function(req,res)
{
    var movie=req.query.movie_id;
    var sql="select avg(rating) from (select rating from fan join fan_rating on fan.user_id=fan_rating.user_id join movies on movies.movie_id=fan_rating.movie_id where movies.movie_id=?) as rating";
    con.query(sql , [movie],function(error , result)
    {
        if(error)
        {
            throw error;
        }
        else
        {
            res.json(result);
        }
    })
}
module.exports.insert_actor=insert_actor;
module.exports.insert_movie=insert_movie;
module.exports.insert_producer=insert_producer;
module.exports.asso_movie_actor=asso_movie_actor;
module.exports.movie_producer=movie_producer;
module.exports.insert_fan=insert_fan;
module.exports.give_rating=give_rating;
module.exports.get_rating=get_rating;
