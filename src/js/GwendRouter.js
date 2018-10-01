function GwendRouter (routes) { 
    this.routes = routes;
}

GwendRouter.prototype.navigateTo = function(hash) {
    let redir = this.routes.filter(e => e.hash == hash.split('#/')[1]).map(e => e.path)[0];
    console.log(this.routes)
    if(redir == undefined) {
        location.hash = '#/';
    } else {
        redir();
    }
}

GwendRouter.prototype.init = function () { 
    if(!location.hash){
        location.hash = '#/';
    }
    this.navigateTo(location.hash)
}

export default GwendRouter

