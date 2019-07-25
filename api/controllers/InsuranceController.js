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
        var mlsId = req.body.incmlsid;
        var mortId = req.body.incmortid;
        Insurance.find().where({ins_MlsID:mlsId,ins_MortID:mortId}).exec(function (err, Insurance) {
            if (err) {
                sails.log("ended in error");
      
              res.send( { error: true });
            }
            const Record = Insurance[0];
            if (Insurance.length===0) {
                res.send({Success: false });
            }
            else{
                res.send({ Success: true});
            }
    });
  
    }
};

