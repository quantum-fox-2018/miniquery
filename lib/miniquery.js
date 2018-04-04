const SweetSelector = {
  select: function(selector) {
    if(selector[0] === '#'){
      console.log(document.querySelector(selector))
    }else if(selector[0] === '.'){
      console.log(document.querySelectorAll(selector))
    }else{
      console.log(document.querySelectorAll(selector))
    }
  }
}
// document.getElementById("myP").style.visibility = "hidden";
const DOM = {
  hide: function (input) {
    document.querySelector(input).style.visibility = "hidden"
  },
  show: function (input) {
    document.querySelector(input).style.visibility = "show"
  },
  addClass : function(input, newClass) {
    document.querySelector(input).classList.add(newClass)
  },
  removeClass: function (input, del) {
    document.querySelector(input).classList.remove(del)
  }
}
const EventDispatcher = {
  on: function (selector, event, callback) {
    document.querySelector(selector).addEventListener(event, callback)
  },
  trigger: function(selector, event) {
    document.querySelector(selector).addEventListener(event,function(){
      console.log("awesome yeah...")
    })
  }
}
const AjaxWrapper = {
  request: function (obj) {
    const oReq = new XMLHttpRequest ()
    oReq.open(obj.type, obj.url)
    oReq.addEventListener("load",obj.success)
    oReq.addEventListener("load",obj.error)
    oReq.send()
  }
  
}

// SweetSelector.select('#eyed') //id
// SweetSelector.select('.klass') //class
// SweetSelector.select('a') //element

// // DOM.hide('.klass')
// DOM.show('.klass')
// DOM.addClass('.klass','shadi')
// DOM.removeClass('.klass','shadi')

// EventDispatcher.on('.klass','click',function(){console.log('awesome')})
// EventDispatcher.trigger('.klass','click')

// AjaxWrapper.request({
//   url:'https://yesno.wtf/api',
//   type:'GET',
//   success:function(result){
//     console.log(result.currentTarget.response)
//   },
//   error:function(err){
//     console.log(err)
//   }
// })
//=======================================================================================
const miniquery = function (input){
  // console.log(this.element)
  this.element = SweetSelector.select(input)
  this.hide = function () {
    DOM.hide(input)
  }
  this.show = function () {
    DOM.show(input)
  }
  this.addClass = function (newClass) {
    DOM.addClass(input, newClass)
  }
  this.removeClass = function (delClass) {
    DOM.removeClass(input, delClass)
  }
  this.on = function (event, callback) {
    EventDispatcher.on(input, event, callback)
  }
  this.trigger = function(event){
    EventDispatcher.trigger(input, event)
  }
  this.ajax = function(obj) {
    AjaxWrapper.request(obj)
  }
  return this
}
miniquery('#eyed') //id
miniquery('.klass') //class
miniquery('a') //element

// miniquery('.klass').hide()
miniquery('.klass').show()
miniquery('.klass').addClass('shadi')
miniquery('.klass').removeClass('shadi')

miniquery('.klass').on('click',function(){console.log('awesome')})
miniquery('.klass').trigger('click')

miniquery('.klass').ajax({
  url:'https://yesno.wtf/api',
  type:'GET',
  success:function(result){
    console.log(result.currentTarget.response)
  },
  error:function(err){
    console.log(err)
  }
})

