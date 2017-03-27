'use strict';
// Add hooks for before save and before delete
module.exports = function(Alldaysummary) {
  // To get acccess to other models
  // var app = require('../../server/server');

  // // Hook for calculating MBG before saving the all day summary from the Trip Summary
  // Alldaysummary.observe('before save', function(ctx, next) {
  //   var TripSummary = app.models.TripSummary;
  //   var MBG = app.models.MBG;

  //   if (ctx.instance) {
  //     TripSummary.find(function(err, trips) {
  //       MBG.find(function(err, mbg) {
  //         console.log(trips);
  //         console.log(mbg);
  //         next();
  //       });
  //     });
  //   }
  // });
};
