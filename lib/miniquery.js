const SweetSelector = {
    select : function(param){
        return document.querySelector(param)
    }
}
    
const DOM = {
    hide: function(param) {
        let doc = SweetSelector.select(param)
        doc.style.visibility = "hidden"
    },

    show: function(param) {
        let doc = SweetSelector.select(param)
        doc.style.visibility = "visible"
    },

    addClass: function(param, newClass) {
        let doc = SweetSelector.select(param)
        doc.classList.add(newClass)
    },

    removeClass: function(param, deletedClass) {
        let doc = SweetSelector.select(param)
        doc.classList.remove(deletedClass)
    }
}

const EventDispatcher = {
    on: function(el, event, process){
        let doc = SweetSelector.select(el)
        doc.addEventListener(event, process)
    },

    trigger: function(el, event){
        let doc = SweetSelector.select(el)
        let ev = new Event(event)
        doc.dispatchEvent(ev)
    }
}

const AjaxWrapper = {
    request: function(obj){
        let oReq = new XMLHttpRequest()
        oReq.addEventListener("load", obj.success)
        oReq.addEventListener("error", obj.fail)
        oReq.open(obj.type, obj.url)
        oReq.send()
    }
}

function miniquery(param) { 
    data = SweetSelector.select(param);
    
    return {
        hide: () => {
            DOM.hide(param)
        },
        show: () => {
            DOM.show(param)
        },
        addClass: (newClass) => {
            DOM.addClass(param, newClass)
        },
        removeClass: (removeClass) => {
            DOM.removeClass(param, removeClass)
        },
        on: (trigger, todo) => {
            EventDispatcher.on(param, trigger, process)
        },
        trigger: (trigger) => {
            EventDispatcher.trigger(param, trigger)
        },
        ajax: () => {
            AjaxWrapper.request(param)
        }
    }
}

const $ = miniquery;