const SweetSelector = {
  select: function(input) {
    switch (input[0]) {
      case undefined:
        return null
      case '#':
        return document.querySelector(input)
      case '.':
        return  document.querySelector(input)
      default:
        return document.querySelector(input)
    }
  }
}
