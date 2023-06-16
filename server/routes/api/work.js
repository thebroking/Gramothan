const express = require('express');
const {pool} = require('../../database/db')

let router = express.Router();

router.route("/works").post(async (req,res)=>{
   
        pool.getConnection((err, connection)=>{
            if(err) res.status(400).json({message:'error while fetching query',error: err})
            const data = req.body
            console.log(data)
            const txt = `SELECT activity_code,activity_name,activity_cost,activity_output FROM ${data.tname} WHERE activity_year = ${data.year} AND village_name = "${data.vname}"`;
            connection.query(txt,(err,result)=>{
                connection.release()
                if(!err){
                    res.json(result)
                }
                else {
                    res.status(400).json({message:'error while fetching query',error:err})
                }
            })
            
        })
 

})

module.exports = router;