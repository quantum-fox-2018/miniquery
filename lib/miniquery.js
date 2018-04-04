class SweetSelector {
    static select(value) {
        if(value[0] == '#'){
            let ids = document.querySelector(value)
            // console.log(ids)
            return console.log(ids)
        } else {
            let classes = document.querySelectorAll(value)
            // console.log(classes)
            return console.log(classes)
        }
    }
}

class DOM {
    static hide(value) {
        if(value[0] == '.'){
            document.querySelectorAll(value).forEach(data => {
                data.style.visibility = 'hidden'
            })
        } else {
            document.querySelector(value).style.visibility = 'hidden'
        }
    }

    static show(value) {
        if(value[0] == '.'){
            document.querySelectorAll(value).forEach(data => {
                data.style.visibility = 'visible'
            })
        } else {
            document.querySelector(value).style.visibility = 'visible'
        }
    }
    
    static addClass(element, className) {
        document.querySelectorAll(element).forEach(data => {
            data.classList.add(className)
        })
    }

    static removeClass(element, className) {
        document.querySelectorAll(element).forEach(data => {
            data.classList.remove(className)
        })
    }
} 

class EventDispatcher {
    static on(value1, value2, callback) {
        let element = document.querySelector(value1)
        let action = value2
        element.addEventListener(action, callback())
    }

    static trigger(value1, value2) {
        let element = document.querySelector(value1)
        let action = value2
        element.addEventListener(action, function() {
            console.log('awesome')
        })
    }
}

class AjaxWrapper {
    static request(obj){
        let request = new XMLHttpRequest();
        request.open(obj.type, obj.url, true)
        request.addEventListener('load', obj.success)
        request.addEventListener('error', obj.fail)
        request.send()
    }
}

