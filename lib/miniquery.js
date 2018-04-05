class SweetSelector{

    static select(input){
        console.log(input)
        let selected;
        switch (input[0]) {
            case "#":    
                let getId = input.substr(1,input.length);
                selected = document.querySelector(input)
                break;
            case ".": 
                let getClass = input.substr(1,input.length);
                selected = document.querySelectorAll(input)
                break;
            default:
                selected = document.querySelectorAll(input)
                ;break;
        }
        console.log(selected)
    }
}

class DOM {

    static hide(input){
       
        switch (input[0]) {
            case "#":
                let getId = input.substr(1,input.length)
                document.getElementById(getId).style.display = "none";
                break;
            case ".":
                let getClass = input.substr(1,input.length);
                let getClassDocument = document.getElementsByClassName(getClass)
                for(let i=0;i<getClassDocument.length;i++){
                    getClassDocument[i].style.display = "none"
                }
                break;
            default:
                let getTagDocument = document.getElementsByTagName(input);
                console.log(getTagDocument)
                for(let i=0;i<getTagDocument.length;i++){
                    getTagDocument[i].style.display = "none"
                }
                break;
        }
    }

    static show(input){

        switch (input[0]) {
            case "#":
                let getId = input.substr(1,input.length)
                document.getElementById(getId).style.display = "block";
                break;
            case ".":
                let getClass = input.substr(1,input.length);
                let getClassDocument = document.getElementsByClassName(getClass)
                console.log(getClassDocument)
                for(let i=0;i<getClassDocument.length;i++){
                    getClassDocument[i].style.display = "block"
                }
            default:

                let getTagDocument = document.getElementsByTagName(input);
                for(let i=0;i<getTagDocument.length;i++){
                    getTagDocument[i].style.display = "block"
                }
                break;
        }

    }

    static addClass(source, target){

        let getClassDocument = document.querySelector(source)
        getClassDocument.classList.add(target)
        console.log(getClassDocument)
    }

    static removeClass(source, target){

        let getClassDocument = document.querySelector(source)
        getClassDocument.classList.remove(target)
        console.log(getClassDocument)
    }
}

class EventDispatcher {

    static on(className, method, callback ){
        let getDocument = document.querySelector(className)
        getDocument.addEventListener(method, callback) 
    }

    static trigger(className, method){
        
        let getDocument = document.querySelector(className)
        getDocument.dispatchEvent(new MouseEvent(method))
        
    }
}

class AjaxWrapper {

    static request(object){

        var oReq = new XMLHttpRequest();

        oReq.open(object.type, object.url);

        oReq.onload = function (callback) {
            object.success('success')
        }

        oReq.onerror = function(callback){
           object.fail('failed')
        }

        oReq.send();
    }
}

class Miniquery {
    constructor(object){
        this.object = object
    }

    hide(){
        DOM.hide(this.object)
    }
    show(){
        DOM.show(this.object)
    }
    addClass(newClass){
        DOM.addClass(this.object, newClass)
    }
    removeClass(newClass){
        DOM.removeClass(this.object, newClass)
    }
    on(method, callback){
        EventDispatcher.on(this.object, method, callback)
    }
    trigger(method){
        EventDispatcher.trigger(this.object, method)
    }
    ajax(object){
        AjaxWrapper.request(object)
    }
}