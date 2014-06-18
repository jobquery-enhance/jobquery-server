"use strict";

var Opportunity = require('./opportunity_model.js');

module.exports = exports = {

  getById: function (req, res) {
    Opportunity.findById(req.params.id)
    .populate([
      {path: 'company'},
      {path: 'tags.tagId'},
      {path: 'survey.userId', select: '_id name'},
      {path: 'category'}
    ])
    .exec(function (err, opp) {
      if (err) {
        res.json(500, err);
        return;
      }
      res.json(200, opp);
    });
  },

  putById: function (req, res) {
    Opportunity.findById(req.params.id, function (err, opp) {
      if (err) {
        res.json(500, err);
        return;
      }

      Opportunity.schema.eachPath(function (field) {
        if ( (field !== '_id') && (field !== '__v') ) {
          if (req.body[field] !== undefined) {
            // depopulate company
            if (field === 'company') {
              if (req.body.company._id) {
                req.body.company = req.body.company._id;
              }
            }
            // depopulate category
            if (field === 'category') {
              if (req.body.category._id) {
                req.body.category = req.body.category._id;
              }
            }
            // depopulate survey
            if (field === 'survey') {
              for (var i = 0; i < req.body.survey.length; i += 1) {
                if (req.body.survey[i].userId._id) {
                  req.body.survey[i].userId = req.body.survey[i].userId._id;
                }
              }
            }
            // depopulate tags
            if (field === 'tags') {
              for (var j = 0; j < req.body.tags.length; j += 1) {
                if (req.body.tags[j].tagId._id) {
                  req.body.tags[j].tagId = req.body.tags[j].tagId._id;
                }
              }
            }
            opp[field] = req.body[field];
          }
        }
      });

      opp.save(function (err, item) {
        if (err) {
          res.json(500, err);
          return;
        }
        res.json(201, item.id);
      });
    });
  },

  get: function (req, res) {
    Opportunity.find()
    .populate([
      {path: 'company'},
      {path: 'tags.tagId'},
      {path: 'survey.userId', select: '_id name'},
      {path: 'category'}
    ])
    .exec(function (err, opps) {
      if (err) {
        res.json(500, err);
        return;
      }
      res.json(200, opps);
    });
  },

  post: function (req, res) {
    Opportunity.create(req.body, function (err, opp) {
      if (err) {
        res.json(500, err);
        return;
      }
      res.json(201, opp.id);
    });
  }

};
