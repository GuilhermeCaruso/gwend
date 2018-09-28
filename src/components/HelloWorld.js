import HelloWorld from '../views/HelloWorld.html';
import logo from '../assets/logo.png'
export default  ()=> {
    document.querySelector('[gw-content]').innerHTML = HelloWorld;
    document.querySelector('img').setAttribute('src', logo);
}