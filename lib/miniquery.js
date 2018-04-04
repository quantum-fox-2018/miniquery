var SweetSelector = (function () {
    return {
        select: function (data) {
            return document.querySelector(data);
        }
    };
}());

var DOM = {
    hide: function (data) {
        document.querySelector(data).style.visibility = "hidden";
    },
    show: function (data) {
        document.querySelector(data).style.visibility = "visible";
    },
    addClass: function (name, data) {
        document.querySelector(name).classList.add(data)
    },
    removeClass: function (name, data) {
        document.querySelector(name).classList.remove(data)
    }
}

EventDispatcher = {
    on: function(selector, event, cb){
        const element = SweetSelector.select(selector);
        element.addEventListener(event, cb);
    },
    trigger: function (selector, event){
        const element = SweetSelector.select(selector);
        element.dispatchEvent(new Event(event));
    }
}


AjaxWrapper = {
    request: function (data) {
       var xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function () {
           if (this.readyState == 4 && this.status == 200) {
                data.success(this.responseText);
           } else {
                data.fail();
           }
       };
       xhttp.open(`${data.type}`, `${data.url}`, true);
       xhttp.send()
    }
}


console.log(SweetSelector.select("#eyed"))
console.log(SweetSelector.select(".klass"))
console.log(SweetSelector.select("a"))



DOM.hide('.klass')
console.log(SweetSelector.select(".klass"))
DOM.show('.klass')
console.log(SweetSelector.select(".klass"))
DOM.addClass('.klass','shadi')
console.log(SweetSelector.select(".klass"))
DOM.removeClass('.klass','shadi')
console.log(SweetSelector.select(".klass"))

EventDispatcher.on('.klass','click',function(){
    console.log('awesome')
  })
EventDispatcher.trigger('.klass','click')



AjaxWrapper.request({
    url: 'http://localhost:3000/api/',
    type: 'GET',
    success: function (data) {
        console.log(JSON.parse(data))
    },
    fail: function (err) {
        console.log(err)
    }
})