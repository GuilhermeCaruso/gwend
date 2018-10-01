function Gwend (options) {  
   this.initConstructor(options);
};

Gwend.prototype.initConstructor = function (options) { 
    let keys = Object.keys(options);
    for(let x = 0; x < keys.length; x++){
        switch (keys[x]) {
            case 'title':
                this.title = keys[x];
                break;
            case 'template':
                this.template = keys[x];
            case 'scripts':
                this.script = keys[x];
            default:
                break;
        }
    }
}

export default Gwend; 