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
    let element = document.querySelector(value)
    element.classList.add(newValue)
  },

  removeClass: function(value, rmValue) {
    let element = document.querySelector(value)
    element.classList.remove(rmValue)
  }
}

const EventDispatcher = {
  on: function(value, action, callback) {
    let element = document.querySelector(value)
    element.addEventListener(action, callback)
  },

  trigger: function(value, action) {
    let element = document.querySelector(value)
    element.dispatchEvent(new MouseEvent(action))
  }
}

const AjaxWrapper = {
  request: function(request) {
    var oReq = new XMLHttpRequest();
    oReq.open(request.type, request.url);
    oReq.addEventListener("load", function() {
      request.success(oReq.responseText)
    });
    oReq.addEventListener("error", function() {
      request.fail(oReq.responseText)
    });
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
    addClass: function(newValue) {
      DOM.addClass(value, newValue)
    },
    removeClass: function(rmValue) {
      DOM.removeClass(value, rmValue)
    },
    on: function(action, callback) {
      EventDispatcher.on(value, action, callback)
    },
    trigger: function(action) {
      EventDispatcher.trigger(value, action)
    },
    ajax: function(request) {
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
  $('.klass').addClass('shadi')
})

document.getElementById('remove').addEventListener('click', function() {
  $('.klass').removeClass('shadi')
})

// Event Dispatch
$('.klass').on('click', function() {console.log('awesome')})
$('.klass').trigger('click')

// AJAX
document.getElementById('ajax').addEventListener('click', function() {
  $().ajax({
    url: 'http://localhost:3000/users/home',
    type: 'GET',
    success: function(result) {
      console.log('Access success');
      console.log(JSON.parse(result));
    },
    fail: function(result) {
      console.log('Access failed');
      console.log(JSON.parse(result)); 
    }
  })
})
