const SweetSelector = {
  select: function(input) {
    let body = document.querySelector('body')
    let tag

    switch (input[0]) {
      case '#':
        tag = document.createElement('div')
        tag.textContent = input.slice(1)
        tag.setAttribute('id', input.slice(1))  
        break;
      case '.':   
        tag = document.createElement('div')      
        tag.textContent = input.slice(1)
        tag.setAttribute('class', input.slice(1))
        break;
      case 'a':
        tag = document.createElement('a')        
        tag.textContent = 'click me'
        tag.setAttribute('href', '#hello')
        break;
      default:
        break;
    }

    body.appendChild(tag)
    console.log(tag);
  }
}

const DOM = {
  hide: function(value) {
    document.querySelector(value).style.display = 'none'
  },

  show: function(value) {
    document.querySelector(value).style.display = 'block'    
  },

  addClass: function(value, value2) {
    console.log('add');
    
    let newClass = document.querySelector(value)
    newClass.classList.add(value2)
  },

  removeClass: function(value, value2) {
    console.log('rm');
    
    let oldClass = document.querySelector(value)
    oldClass.classList.remove(value2)
  }
}

const EventSet = []

const EventDispatcher = {
  on: function(value, event, callback) {
    EventSet.push({
      value,
      event,
      callback
    })
  },

  trigger: function(value, event) {
    EventSet.forEach(data => {
      if (data.event == event) {
        document.querySelector(value).addEventListener(event, data.callback)
      }
    })
  }
}

SweetSelector.select('#eyed')
SweetSelector.select('.klass')
SweetSelector.select('a')

document.getElementById('hide').addEventListener('click', function() {
  DOM.hide('.klass')
})

document.getElementById('show').addEventListener('click', function() {
  DOM.show('.klass')
})

document.getElementById('add').addEventListener('click', function() {
  DOM.addClass('.klass', 'shadi')
})

document.getElementById('remove').addEventListener('click', function() {
  DOM.removeClass('.klass', 'shadi')
})

EventDispatcher.on('.klass', 'click', function() {
  console.log('awesome');
})

EventDispatcher.trigger('.klass', 'click')