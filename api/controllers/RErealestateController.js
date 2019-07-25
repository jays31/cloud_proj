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
         
        RErealestate.create({ firstName: firstName,
        lastName: lastName,mlsId:mlsId,mortId:mortId}).exec(
        function (err){
            if (err) { 
                res.send( { error: "Database Error: Could not data into table" }); 
            }
            res.send({ regSuccess: "Appraisal Request was submitted successfully!"});
        });
    },

};

