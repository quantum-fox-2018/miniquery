const SweetSelector = {
  select: function(value) {
    console.log(document.querySelectorAll(value));
  }
}

const DOM = {
  hide: function (value) {
      document.querySelectorAll(value).forEach(data=>{
          data.style.visibility = "hidden"})
  },
  show: function (value) {
      document.querySelectorAll(value).forEach(data=>{
          data.style.visibility = "visible"})
  },
  addClass: function (value, additional) {
      document.querySelectorAll(value).forEach(data=>{
          data.classList.add(additional)
      })
      
  },
  removeClass: function (value, additional) {
      document.querySelectorAll(value).forEach(data=>{
          data.classList.remove(additional)
      })
  }
}
const EventDispatcher = {
  on: function (value, additional, cb) {
      document.querySelector(value).addEventListener(event, callback())
  },
  trigger: function (value,additional){
      EventDispatcher.on(value,additional,function(){
          console.log('awesome')
      })
  }
}

const ajaxWrapper = (object) => {
  var request = new XMLHttpRequest()
  request.open(object.type, object.url, true)
  request.addEventListener('load', (object.success))
  request.addEventListener('error', (object.fail))
  request.send()
}

function miniquery(value) {

  this.hide = function () {
      DOM.hide(value);
  }

  this.show = function () {
      DOM.show(value);
  }

  this.addClass = function (additional) {
      DOM.addClass(value, additional);
  }

  this.removeClass = function (additional) {
      DOM.removeClass(value, additional);
  }

  this.on = function (event, callback) {
      EventDispatcher.on(value, event, callback());
  }

  this.trigger = function (event) {
      EventDispatcher.trigger(value, event, function () {
          console.log('awesome');
      })
  }

  this.ajax = function (obj) {
      AjaxWrapper.request(obj);
  }

  return this
}

const $ = miniquery;