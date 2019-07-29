/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  '/login': { view: 'pages/login'},
  '/status': { view: 'pages/status'},
  '/emp/empconfirmation': { view: 'pages/emp/empconfirmation'},
  '/emp/login': { view: 'pages/emp/emplogin'},
  '/realestate/appraisalrequest': { view: 'pages/realestate/appraisalrequest'},
  '/realestate/rehome': { view: 'pages/realestate/rehome'},
  '/realestate/relogin': { view: 'pages/realestate/relogin'},
  '/realestate/appraisalinfo': { view: 'pages/realestate/appraisalinfo'},
  '/insurance/home': { view: 'pages/insurance/insurancehome'},
  '/BrokerMortgageController/createMortgageRequest' : 'BrokerMortgageController.createMortgageRequest',
  '/EmployerController/userLogin_805': 'EmployerController.userLogin_805',
  '/EmployerController/approvalRequest_805': 'EmployerController.approvalRequest_805',
  '/BrokerMortgageController/employerApprovalUpdate_805': 'BrokerMortgageController.employerApprovalUpdate_805',
  '/RErealestateController/createAppraisalRequest':'RErealestateController.createAppraisalRequest',
  '/RErealestateController/updateAppraisalValue_805':'RErealestateController.updateAppraisalValue_805',
  '/InsuranceController/insertAppraisalVal_Ins':'InsuranceController.insertAppraisalVal_Ins',
  '/insurance/info': { view: 'pages/insurance/insuranceInfo'},
  '/InsuranceController/updateInsurance' : 'InsuranceController.updateInsurance',
  '/BrokerMortgageController/updateBrokerINC' : 'BrokerMortgageController.updateBrokerINC',
  '/BrokerMortgageController/updateBrokerRE' : 'BrokerMortgageController.updateBrokerRE',
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
