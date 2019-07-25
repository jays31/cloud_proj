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

    employerApprovalUpdate_805: function (req, res) {
        var mortId = req.body.mortId;
        var salary = req.body.employee_salary;
        var employed_date = req.body.employeestartdate;
        var employerConfirmationStatus = req.body.approvalStatus;
        
        
        sails.log("got here"+salary);
        sails.log("got here"+employed_date);
        //var studentRecord= await Student.findOne({studId: studId});
        //sails.log(studentRecord);
        //Student.find({ id: studId }).exec(function (err, Student) {
      
        BrokerMortgage.update({id:mortId}).set({salary:salary, employed_date:employed_date, employerConfirmationStatus:employerConfirmationStatus }).exec (function(err){
            if (err) {
                sails.log("could not update record");
            }

            sails.log("updated successfully");
        });
        //BrokerMortgage.query('update BrokerMortgage set BrokerMortgage.salary='+ salary+', BrokerMortgage.employed_date='+employed_date+', BrokerMortgage.employerConfirmationStatus='+employerConfirmationStatus+'');

    
        
       
      },
};

