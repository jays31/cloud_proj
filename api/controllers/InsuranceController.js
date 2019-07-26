/**
 * InsuranceController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    insertAppraisalVal_Ins: function (req, res) { 
        var ins_MortID = req.body.reMortID;
        var ins_MlSID = req.body.reMIsID;
        var incomingAppraisalval = req.body.appraisalvalInput;   

        var headerdata = req.headers;
        var strjson = JSON.stringify(headerdata);
        sails.log(strjson);

        const fs = require('fs') 

        //Write data in 'logs.txt' . 
        fs.appendFile('assets/logs.txt', "\n\n\nAppraisal Value Insert Module\n", (err) => { 
            // In case of a error throw err. 
            if (err) throw err; 
        }) 
        fs.appendFile('assets/logs.txt', strjson, (err) => { 
            // In case of a error throw err. 
            if (err) throw err; 
        })    

        Insurance.create({ ins_MortID:ins_MortID, ins_MlSID:ins_MlSID, ins_appraisalValue: incomingAppraisalval}).exec(
        function (err){
            if (err) { 
                res.send( { error: "Database Error: Could not insert into table" }); 
            }
            res.send({ regSuccess: "Application was submitted successfully!"});
            sails.log("record inserted successfully");
        });
    },
  
    findrecord: function(req,res){
        var mortId = req.body.incmortid;

        var headerdata = req.headers;
        var strjson = JSON.stringify(headerdata);
        sails.log(strjson);

        const fs = require('fs') 

        //Write data in 'logs.txt' . 
        fs.appendFile('assets/logs.txt', "\n\n\nInsurance Find Record Module\n", (err) => { 
            // In case of a error throw err. 
            if (err) throw err; 
        }) 
        fs.appendFile('assets/logs.txt', strjson, (err) => { 
            // In case of a error throw err. 
            if (err) throw err; 
        })

        Insurance.find().where({ins_MortID:mortId}).exec(function (err, Insurance) {
            if (err) {
                sails.log("ended in error");
      
              res.send( { error: true });
            }
            const Record = Insurance[0];
            console.log(Record)
            if (Insurance.length===0) {
                res.send({Success: false });
            }
            else{
                res.send({ Success: true, Record});
            }
    });
  
    },

    updateInsurance:function(req,res)
    {
        //var mlsid = req.body.submitted_mlsid;
        var mortid = req.body.submitted_mortid;       
        var firstName = req.body.submitted_firstname;
        var lastName = req.body.submitted_lastname;
        //var appraisval = req.body.submitted_appvalue;
        var incval = req.body.submitted_incvalue;
        var deduval = req.body.submitted_deduvalue;

        var headerdata = req.headers;
        var strjson = JSON.stringify(headerdata);
        sails.log(strjson);

        const fs = require('fs') 

        //Write data in 'logs.txt' . 
        fs.appendFile('assets/logs.txt', "\n\n\nUpdate Insurance Value Module\n", (err) => { 
            // In case of a error throw err. 
            if (err) throw err; 
        }) 
        fs.appendFile('assets/logs.txt', strjson, (err) => { 
            // In case of a error throw err. 
            if (err) throw err; 
        })
         
        Insurance.update({ins_MortID:mortid}).set({firstname:firstName,lastname:lastName,insured_value: incval, deductible_value: deduval }).exec(function(err){
            if (err) {
                sails.log("could not update record");
            }
            sails.log("updated successfully");
            res.send({Success:true});
        });
     
    }
};

