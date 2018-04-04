// const SweetSelector = {
//   select: function(input) {
//     let body = document.querySelector('body')
//     let tag

//     switch (input[0]) {
//       case '#':
//         tag = document.createElement('div')
//         tag.textContent = input.slice(1)
//         tag.setAttribute('id', input.slice(1))
//         break;
//       case '.':   
//         tag = document.createElement('div')
//         tag.textContent = input.slice(1)
//         tag.setAttribute('class', input.slice(1))
//         break;
//       case 'a':
//         tag = document.createElement('a')
//         tag.textContent = 'click me'
//         tag.setAttribute('href', '#hello')
//         break;
//       default:
//         break;
//     }

//     body.appendChild(tag)
//     console.log(tag);
//   }
// }

const SweetSelector = {
  select: function(value) {
    console.log(document.querySelector(value));
    return document.querySelector(value)
  }
}

const DOM = {
  hide: function(value) {
    document.querySelector(value).style.display = 'none'
  },

  show: function(value) {
    document.querySelector(value).style.display = ''
  },

  addClass: function(value, newValue) {
    console.log('add');
    
    let element = document.querySelector(value)
    element.classList.add(newValue)
  },

  removeClass: function(value, rmValue) {
    console.log('rm');
    
    let element = document.querySelector(value)
    element.classList.remove(rmValue)
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

const AjaxWrapper = {
  request: function(request) {
    var oReq = new XMLHttpRequest();
    oReq.open(request.type, request.url);
    oReq.addEventListener("load", request.success);
    oReq.addEventListener("error", request.fail);
    oReq.send();
  }
}

function miniquery(value) {
  SweetSelector.select(value)
  
  return {
    hide: function() {
      DOM.hide(value)
    },
    show: function() {
      DOM.show(value)
    },
    addClass: function() {
      DOM.addClass(value)
    },
    removeClass: function() {
      DOM.removeClass(value)
    },
    on: function() {
      EventDispatcher.on(value, event, callback)
    },
    trigger: function() {
      EventDispatcher.trigger(value, event)
    },
    ajax: function() {
      AjaxWrapper.request(request)
    }
  }
}

const $ = miniquery

// Select
$('#eyed')
$('.klass')
$('a')

// DOM Manipulations
document.getElementById('hide').addEventListener('click', function() {
  $('.klass').hide()
})

document.getElementById('show').addEventListener('click', function() {
  $('.klass').show()
})

document.getElementById('add').addEventListener('click', function() {
  $('.klass').addClass()
})

document.getElementById('remove').addEventListener('click', function() {
  $('.klass').removeClass()
})

// Event Dispatch
$('.klass').on('click', function() {console,log('awesome')})
$('.klass').trigger('click')

// AJAX
$().ajax({
  url: 'http://hacktiv8.com',
  type: 'GET',
  success: function() {
    // do something
    console.log('Access success');
  },
  fail: function() {
    // do something
    console.log('Access failed'); 
  }
})

// SweetSelector.select('#eyed')
// SweetSelector.select('.klass')
// SweetSelector.select('a')

// document.getElementById('hide').addEventListener('click', function() {
//   // DOM.hide('.klass')
// })

// document.getElementById('show').addEventListener('click', function() {
//   // DOM.show('.klass')
// })

// document.getElementById('add').addEventListener('click', function() {
//   // DOM.addClass('.klass', 'shadi')
// })

// document.getElementById('remove').addEventListener('click', function() {
//   // DOM.removeClass('.klass', 'shadi')
// })

// EventDispatcher.on('.klass', 'click', function() {
//   console.log('awesome');
// })

// EventDispatcher.trigger('.klass', 'click')

// AjaxWrapper.request({
//   url: 'http://hacktiv8.com',
//   type: 'GET',
//   success: function() {
//     // do something
//     console.log('success');
//   },
//   fail: function() {
//     // do something
//     console.log('failed');
    
//   }
// })