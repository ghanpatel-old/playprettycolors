
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'play.prettycolors.tv' });
};