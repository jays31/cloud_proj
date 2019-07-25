/**
 * EmployerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


  userLogin_805: function (req, res) {
    var useremail = req.body.employeeEmail;
    var userpassword = req.body.employeepwd
    sails.log(userpassword);
    sails.log(useremail);
    //var studentRecord= await Student.findOne({studId: studId});
    //sails.log(studentRecord);
    //Student.find({ id: studId }).exec(function (err, Student) {
      Employer.find().where({employeeEmail:useremail}).exec(function (err, Employer) {
      if (err) {
          sails.log("ended in error");

        res.send( { error: true });
      }

      sails.log(Employer);
      const userRecord=Employer[0];
    //   sails.log(userRecord.length());

      if (Employer.length===0) {
          res.send({wrongEmail:true});
          sails.log("email does not exist")
      }

      if (userRecord.employeepwd===userpassword) {
      sails.log(userRecord.employeepwd);
      res.send({ Success: true });

      } else {

      res.send({Success: false});

      }


    });
   
  },

  approvalRequest_805: function (req, res) {
    var useremail = req.body.employeeEmail;
    
    
    sails.log(useremail);
    //var studentRecord= await Student.findOne({studId: studId});
    //sails.log(studentRecord);
    //Student.find({ id: studId }).exec(function (err, Student) {
      Employer.find().where({employeeEmail:useremail}).exec(function (err, Employee) {
      if (err) {
          sails.log("ended in error");

        res.send( { error: 'User was not found.' });
      }

      sails.log(Employee);
      const recordFound=Employee[0];
      sails.log(recordFound.salary);

      if (recordFound.salary>=50000) {
      //sails.log(salary);
      res.send({ Success: true, emp_salary:recordFound.salary, emp_employeddate:recordFound.employed_date });

      } else {

      res.send({Success: false, emp_salary:recordFound.salary, emp_employeddate:recordFound.employed_date});

      }


    });
   
  },
  

};

