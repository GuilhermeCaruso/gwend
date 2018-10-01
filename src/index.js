import './style/main.scss'
import GwendRouter from './js/GwendRouter';
import HelloWorld from './components/HelloWorld'
import Menu from './components/Menu'

(function () {
    let routes = new GwendRouter([
        {
            name: "Home",
            path: HelloWorld,
            hash: ""
        }
    ])
    
    window.addEventListener('hashchange',function () { 
        routes.navigateTo(location.hash);
    })
    
    routes.init();
}());