/**
 * BrokerMortgageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    // This method will be used to insert Broker Mortgage Request Details
    // into the database
    createMortgageRequest: function (req, res) { 
        var userName = req.body.submitted_username;
        var password = req.body.submitted_password;       
        var firstName = req.body.submitted_firstname;
        var lastName = req.body.submitted_lastname;
        var address = req.body.submitted_address;
    
        var phone = req.body.submitted_pnumber;
        var employerName = req.body.submitted_employer;
        var employeeEmail = req.body.submitted_email;
        var mortgageAmount = req.body.submitted_amount;
        var mlsId = req.body.submitted_mlsId;
         
        BrokerMortgage.create({ userName: userName,
        password: password,firstName: firstName,
        lastName: lastName, currentAddress: address, phone: phone,mlsId:mlsId,
        currentEmployerName:employerName, employeeEmail:employeeEmail, mortgageAmount:mortgageAmount,
        mortgageStatus:'Pending',insuranceStatus:'Pending',employerConfirmationStatus:'Pending',reAppraisalStatus:'Pending'}).exec(
        function (err){
            if (err) { 
                res.send( { error: "Database Error: Could not insert into table" }); 
            }
            res.send({ regSuccess: "Application was submitted successfully!"});
        });
    },
};

