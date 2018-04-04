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