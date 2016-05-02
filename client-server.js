require('express')().use(require('express')
.static('build')).listen(8080, ()=> console.log('magic is up on 8080'));
