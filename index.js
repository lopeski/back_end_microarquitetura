var exec = require('child_process').exec;

exec('node auth/index', function(error, stdout, stderr){
  console.log(stdout);
});
exec('node post/index', function(error, stdout, stderr){
  console.log(stdout);
});
exec('node tasks/index', function(error, stdout, stderr){
  console.log(stdout);
});
