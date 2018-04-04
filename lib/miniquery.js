var SweetSelector = {
  select : function (value){
    console.log(document.querySelector(value));
    return document.querySelector(value);
  }
}

SweetSelector.select("#eyed")
SweetSelector.select(".klass")
SweetSelector.select("a")

var DOM = {
  hide : function(value){
    $(value).hide();
  },
  show : function(value){
    $(value).show();
  },
  addClass : function(klass,changeklass){
    $( klass ).addClass( changeklass );
  },
  removeClass:function(klass,changeklass){
    $(klass).removeClass(changeklass)
  }
}

var EventDispatcher = {
  on:function(kelas,aksi,cb){
    var element = SweetSelector.select(kelas)
    element.addEventListener(aksi,cb)
  },
  triger : function(kelas,aksi){
    var event = new Event(aksi);
    var element = SweetSelector.select(kelas)
    element.dispatchEvent(event);
  }
}

let AjaxWrapper = {
  request:function(obj){
    var oreq = new XMLHttpRequest();
    oreq.open(obj.type,obj.url,true)
    oreq.onload=function(){
      if(oreq.status>=200 && oreq.status<400){
        const data = oreq.responseText
        obj.success(data)
      }else{
        obj.fail(err)
      }
    }
    oreq.send()
  }
}

DOM.hide('.klass')
DOM.show('.klass')

DOM.addClass('.klass','shadi')
DOM.removeClass('.klass','shadi')

EventDispatcher.on('.klass','click',function(){
  console.log('awesom')
})
EventDispatcher.triger('.klass','click')

AjaxWrapper.request({
  url:'http://127.0.0.1:8080/',
  type:'GET',
  success: data => {
    console.log(data)
  },
  fail: err => {
    console.log(err)
  }
})
