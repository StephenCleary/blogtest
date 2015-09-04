var util = require('util');
hexo.extend.helper.register('dump', function(o){
  return util.inspect(o, { depth: null });
});