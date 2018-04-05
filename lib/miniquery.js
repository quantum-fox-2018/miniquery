const SweetSelector = {
  Select: function(attributes){
    let body = document.querySelector("body")
    let tag;

    switch (attributes[0]) {
      case '#':
        let idAttrib = attributes.slice(1);
        tag = document.createElement('div')
        tag.textContent = idAttrib
        tag.setAttribute('id', idAttrib)
        break;

      case '.':
        let classAttrib = attributes.slice(1);
        tag = document.createElement('div')
        tag.textContent = classAttrib
        tag.setAttribute('class', classAttrib)
        break;

      default:
        tag = document.createElement(attributes[0])
        tag.textContent = 'Click Me'
        tag.setAttribute('href', '#hello')

    }

    body.appendChild(tag)
    //let tag = document.querySelector(attributes);
  }

}

const DOM = {
  hide: function(attributes){
    document.querySelector(attributes).style.display = "none";
  },
  show: function(attributes){
    document.querySelector(attributes).style.display = "block";
  },
  addClass: function(attributes, addAttributes){
    let newClass = document.querySelector(attributes);
    newClass.classList.add(addAttributes)
    // console.log(newClass);
  },
  removeClass: function(attributes, removeAttributes){
    let currClass = document.querySelector(attributes);
    currClass.classList.remove(removeAttributes)
    // console.log(currClass);
  }
}

const EventCollection = [];

const EventDispatcher = {
  on: function(attributes, events, callbackFunction){

    // EventCollection.push({
    //   attributes,
    //   events,
    //   callbackFunction
    // })

    let element = document.querySelector(attributes)
    element.addEventListener(events, callbackFunction)
  },
  trigger: function(attributes, events){

    // for (let i = 0; i < EventCollection.length; i++) {
    //     if(EventCollection[i].attributes == attributes &&
    //     EventCollection[i].events == events){
    //       document.querySelector(attributes).addEventListener(events, EventCollection[i].callbackFunction)
    //     }
    // }

    let element = document.querySelector(attributes)
    let event = new Event(events)
    element.dispatchEvent(event)

  }
}

const AjaxWrapper = {
  request: function(objReq){
    let oreq = new XMLHttpRequest()
    // oreq.addEventListener("load", )
    oreq.onreadystatechange = function(response){
      if(this.readyState == 4 && this.status == 200){
        console.log("kesini");
        objReq.success(response)
      }else{
        objReq.fail(response)
      }
    }
    oreq.open(objReq.type, objReq.url, true)
    oreq.send()

    // document.querySelector('.reqAjax').addEventListener('click',function(){
    //   console.log('Test dulu');
    //   $.ajax(objReq.url, objReq.success, objReq.fail)
    // })
  }
}


SweetSelector.Select('#eyed');
SweetSelector.Select('.klass');
SweetSelector.Select('a');
// DOM.show('.klass')

// DOM.addClass('.klass', 'shadi');
// SweetSelector.Select('.klass');
// DOM.removeClass('.klass', 'shadi');

// EventDispatcher.on()
// EventDispatcher.trigger()
EventDispatcher.on('.klass', 'click', function(){ console.log('Awesome');})
EventDispatcher.trigger('.klass', 'click')

EventDispatcher.on('#eyed', 'click', function(){ console.log('Eyed di click');})
EventDispatcher.trigger('#eyed', 'click')

document.querySelector('.reqAjax').addEventListener('click',function(){
    AjaxWrapper.request({
      url:'http://127.0.0.1:8080/forAJAX.html',
      type: 'GET',
      success: function(response) {
        // console.log(response.target.response);
        $('#reqResponse').html(response.target.response).slideDown();
      },
      fail: function(){
        console.log('Failed to load');
      }
    })
})
