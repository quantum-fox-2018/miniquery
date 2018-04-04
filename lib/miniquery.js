const SweetSelector = {
    select: (element) => {
        let typeElement = element[0]

        // console.log(document.getElementById(element.substr(1)))

        if(typeElement == '#'){
            element = element.substr(1)
            // console.log(element)
            return document.getElementById(element)
        } else if(typeElement == '.'){
            element = element.substr(1)
            return document.getElementsByClassName(element)
        } else {
            return document.getElementsByTagName(element)
        }
    }
}

const DOM = {
    show: (element) => {
        let changeElement = SweetSelector.select(element)
        // console.log(changeElement)

        if(changeElement.length > 0){
            for(let i=0; i<changeElement.length; i++){
                changeElement[i].style.display = 'block'
            }
        } else {
            changeElement.style.display = 'block'
        }
    },

    hide: (element) => {
        let changeElement = SweetSelector.select(element)

        if(changeElement.length > 0){
            for(let i=0; i<changeElement.length; i++){
                changeElement[i].style.display = 'none'
            }
        } else {
            changeElement.style.display = 'none'
        }
    },

    addClass: (element, newClass) => {
        let changeElement = SweetSelector.select(element)

        if(changeElement.length > 0){
            for(let i=0; i<changeElement.length; i++){
                changeElement[i].classList.add(newClass)
            }
        } else {
            changeElement.classList.add(newClass)
        }
    },

    removeClass: (element, className) => {
        let changeElement = SweetSelector.select(element)

        if(changeElement.length > 0){
            for(let i=0; i<changeElement.length; i++){
                changeElement[i].classList.remove(className)
            }
        } else {
            changeElement.classList.remove(className)
        }
    }
}

const EventDispatcher = {
    on: (value, event, callback)=>{
        document.querySelector(value).addEventListener(event, callback())
    }, 
    trigger: (value, event)=>{
        EventDispatcher.on(value, event, function(){
            console.log('awesome')
        })
    }
}

const AjaxWrapper = {
    request: (objReq) => {
        let xmlReq = new XMLHttpRequest()
        console.log(xmlReq)
        xmlReq.load = function(){
            if(this.status == 200){
                objReq.success(this.responseText);
            } else {
                objReq.fail()
            }
        }
        xmlReq.open(objReq.type, objReq.url, true)
        xmlReq.send()
    }
}

// SweetSelector.select('#eyed')
// console.log(SweetSelector.select('#eyed'))
// console.log(SweetSelector.select('a'))

// DOM.hide('.klass')
// DOM.show('.klass')
// DOM.hide('#eyed')
DOM.addClass('.klass', 'shadi')
DOM.removeClass('.klass', 'shadi')
console.log(SweetSelector.select('.klass'))


EventDispatcher.on('.klass', 'click', function(){
    console.log('awesome')
})
EventDispatcher.trigger('.klass', 'click');

AjaxWrapper.request({
    url: 'https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=data&format=json',
    type: 'GET',
    success: function(data) {
     console.log("Success: ", data)
    },
    fail: function() {
      console.log("erorr")
    }
})