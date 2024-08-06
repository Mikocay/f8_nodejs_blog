const Course = require('../models/Course');

function SiteController() {
  return {
    // [GET] /
    index(req, res) {
      Course.find({})
        .then((courses) => {
          res.json(courses);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // [GET] /search
    search(req, res) {
      res.render('search');
    },
  };
}

module.exports = new SiteController();
