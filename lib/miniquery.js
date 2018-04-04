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
    // console.log('Dari on lho');
    // console.log(attributes);

    EventCollection.push({
      attributes,
      events,
      callbackFunction
    })
    // console.log('events on');

  },
  trigger: function(attributes, events){

    for (let i = 0; i < EventCollection.length; i++) {
        if(EventCollection[i].attributes == attributes &&
        EventCollection[i].events == events){
          document.querySelector(attributes).addEventListener(events, EventCollection[i].callbackFunction)
        }
    }

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

// AjaxWrapper.request({
//   url:'someurl',
//   type: 'GET',
//   success: function() {
//
//   },
//   fail: function(){
//
//   }
// })
