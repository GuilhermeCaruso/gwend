const gwend = require('./js/gwend');
import './style/main.scss'

(function () {
    window.addEventListener('hashchange',function () { 
        gwend.navigateTo(location.hash);
    })
    gwend.init()
}());
