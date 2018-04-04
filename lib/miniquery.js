const SweetSelector = {
  select: function(input) {
    switch (input[0]) {
      case undefined:
        return null
      case '#':
        return document.querySelector(input)
      case '.':
        return document.querySelector(input)
      default:
        return document.querySelector(input)
    }
  }
}

const DOM = {
  hide: function(option) {
    let element = SweetSelector.select(option)
    element.style.display = "none"
  },
  show: function(option) {
    let element = SweetSelector.select(option);
    element.style.display = "block"
  },
  addClass: function(option, className) {
    let element = SweetSelector.select(option);
    element.classList.add(className)
  },
  removeClass: function(option, className) {
    let element = SweetSelector.select(option);
    element.classList.remove(className)
  }
}

const EventDispatcher = {
  on: function(option, event, callback) {
    let options = SweetSelector.select(option)
    options.addEventListener(event, callback)
  },
  trigger: function(option, event) {
    let options = SweetSelector.select(option)
    options.dispatchEvent(new Event(event))
  }
}
