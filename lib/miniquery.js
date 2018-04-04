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

SweetSelector.select('#eyed') //id
SweetSelector.select('.klass') //class
SweetSelector.select('a') //element

// DOM.hide('.klass')
DOM.show('.klass')
DOM.addClass('.klass','shadi')
DOM.removeClass('.klass','shadi')

EventDispatcher.on('.klass','click',function(){console.log('awesome')})
EventDispatcher.trigger('.klass','click')

AjaxWrapper.request({
  url:'https://yesno.wtf/api',
  type:'GET',
  success:function(result){
    console.log(result.currentTarget.response)
  },
  error:function(err){
    console.log(err)
  }
})