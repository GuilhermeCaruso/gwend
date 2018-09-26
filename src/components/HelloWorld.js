import HelloWorld from '../views/HelloWorld.html';
export default  ()=> {
    document.querySelector('[gw-content]').innerHTML = HelloWorld;
}