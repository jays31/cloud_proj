/**
 * RErealestateController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    createAppraisalRequest: function (req, res) {        
        var firstName = req.body.submitted_firstname;
        var lastName = req.body.submitted_lastname;
        var mlsId = req.body.submitted_mlsId;
        var mortId = req.body.submitted_mortId;
         

        var headerdata = req.headers;
        var strjson = JSON.stringify(headerdata);
        sails.log(strjson);

        const fs = require('fs') 

        //Write data in 'logs.txt' . 
        fs.appendFile('assets/logs.txt', "\n\n\nAppraisal Requesting Module\n", (err) => { 
            // In case of a error throw err. 
            if (err) throw err; 
        }) 
        fs.appendFile('assets/logs.txt', strjson, (err) => { 
            // In case of a error throw err. 
            if (err) throw err; 
        })



        RErealestate.create({ firstName: firstName,
        lastName: lastName,mlsId:mlsId,mortId:mortId}).exec(
        function (err){
            if (err) { 
                res.send( { error: "Database Error: Could not data into table" }); 
            }
            res.send({ regSuccess: "Appraisal Request was submitted successfully!"});
        });
    },

    updateAppraisalValue_805: function (req, res) {        
        var mlsId = req.body.reMIsID;
        var incomingAppraisalval = req.body.appraisalvalInput;
        
         
        var headerdata = req.headers;
        var strjson = JSON.stringify(headerdata);
        sails.log(strjson);

        const fs = require('fs') 

        //Write data in 'logs.txt' . 
        fs.appendFile('assets/logs.txt', "\n\n\nAppraisal Value Update Module\n", (err) => { 
            // In case of a error throw err. 
            if (err) throw err; 
        }) 
        fs.appendFile('assets/logs.txt', strjson, (err) => { 
            // In case of a error throw err. 
            if (err) throw err; 
        })



        RErealestate.update({mlsId:mlsId}).set({appraisalValue:incomingAppraisalval }).exec (function(err){
            if (err) {
                sails.log("could not update record");
            }

            sails.log("Updated successfully");
            res.send({Success:true, Message:"updated successfully"});
        });
       
    },

};

