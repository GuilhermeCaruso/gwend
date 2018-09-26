const routes = require('./routes')

module.exports = {
    navigateTo: function (hash) { 
        let redir = routes.filter(e => e.hash == hash.split('#/')[1]).map(e => e.path)[0];
        if(redir == undefined){
            location.hash = '#/'
        }else{
            redir();
        }
    },
    init: function(){
        if(!location.hash){
            location.hash = '#/';
        }
        this.navigateTo(location.hash)
    }
}