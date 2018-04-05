const SweetSelector = {
    select: (value) => {
        console.log(document.querySelector(value));
        return document.querySelector(value);
    }
}

const DOM = {
    hide: (value) => {
        document.querySelector(value).style.display = "none";
    },
    show: (value) => {
        document.querySelector(value).style.display = "";
    },
    addClass: (value, newClass) => {
        let element = document.querySelector(value)
        element.classList.add(newClass)
    },
    removeClass: (value, remClass) => {
        let element = document.querySelector(value)
        element.classList.remove(remClass)
    }
}

const EventDispatcher = {
    on: (value, trigger, todo) => {
        document.querySelector(value).addEventListener(trigger, todo);
    },
    trigger: (value, trigger) => {
        let element = document.querySelector(value);
        let ev = new Event(trigger)
        element.dispatchEvent(ev);
    }
}

const AjaxWrapper = {
    request: (req) => {
        let oReq = new XMLHttpRequest()
        oReq.open(req.type, req.url)
        oReq.addEventListener("load", req.success)
        oReq.addEventListener("error", req.fail)
        oReq.send()
    }
}

// Release 4: miniquery

function miniquery(value) { 
    data = SweetSelector.select(value);
    
    return {
        hide: () => {
            DOM.hide(value)
        },
        show: () => {
            DOM.show(value)
        },
        addClass: (newClass) => {
            DOM.addClass(value, newClass)
        },
        removeClass: (remClass) => {
            DOM.removeClass(value, remClass)
        },
        on: (trigger, todo) => {
            EventDispatcher.on(value, trigger, todo)
        },
        trigger: (trigger) => {
            EventDispatcher.trigger(value, trigger)
        },
        ajax: () => {
            AjaxWrapper.request(value)
        }
    }
}

const $ = miniquery;

$('.klass')
$('#eyed')
$('a')
$('.klass').hide()
$('.klass').show()
$('.klass').addClass('shadi')
$('.klass').removeClass('shadi')
$('.klass').on('click', function() { console.log("awesome")} )
$('.klass').trigger('click');
$('.klass').ajax({
    url: 'someurl',
    type: 'GET',
    success: function() {
        console.log("Transer complete")
    },
    fail: function() {
        console.log("An error occurred while transferring the file.")
    }
})

// Sweet Selector
// SweetSelector.select('#eyed')
// SweetSelector.select('.klass')
// SweetSelector.select('a')

// DOM
// DOM.hide('.klass')
// DOM.show('.klass')

// Hide via jQuery
// $(".klass").hide();

// DOM.addClass('.klass', 'shadi')
// DOM.removeClass('.klass', 'shadi')

// Event Dispatch
// EventDispatcher.on('.klass', 'click', function() { console.log("awesome")} )
// EventDispatcher.trigger('.klass', 'click')

// AjaxWrapper
// AjaxWrapper.request({
//     url: 'someurl',
//     type: 'GET',
//     success: function() {
//         console.log("Transer complete")
//     },
//     fail: function() {
//         console.log("An error occurred while transferring the file.")
//     }
// })