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

        res.send( { error: 'User was not found.' });
      }

      sails.log(Employer);
      const userRecord=Employer[0];

      if (userRecord.employeepwd===userpassword) {
      //sails.log(Employer);
      res.send({ Success: true });

      } else {

      res.send({Success: false});

      }


    });
   
  },
  

};

