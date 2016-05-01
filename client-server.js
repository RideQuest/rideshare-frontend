require('express')().use(require('express')
.static(__dirname + '/build')).listen(8080, ()=> console.log('magic is up on 8080'));
