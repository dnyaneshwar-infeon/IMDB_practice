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
const asso_movie_producer=function(req , res)
{
    var pro=req.query.pro_id;
    var movie=req.query.movie_id;
    var sql="insert into movie_producer(pro_id , movie_id)values(?,?)";
    con.query(sql , [pro , movie] , function(error,result)
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
module.exports.asso_movie_producer=asso_movie_actor;