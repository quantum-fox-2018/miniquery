class SweetSelector {
  static select(input) {
    let selected;

    if(input[0] === '#') {
      input = input.slice(1)
      selected = document.getElementById(input)
    } else if (input[0] === '.') {
      input = input.slice(1)
      selected = document.getElementsByClassName(input)
    } else {
      selected = document.getElementsByTagName(input)
    }
    console.log(selected);
    // masih error untuk id, perlu conditional
    if(selected.length > 1) {
      for (let i = 0; i < selected.length; i++) {
        console.log(selected[i].outerHTML);
      }
      // console.log(document.querySelectorAll(`.${input}`));

      return selected
    } else {
      console.log(selected.outerHTML);
      return selected
    }
  }
}

class DOM {
  static hide(input) {
    let selected = SweetSelector.select(input)

    if (selected.length > 1) {
      for (var i = 0; i < selected.length; i++) {
        selected[i].style.display = 'none'
      }
    } else {
      selected.style.display = 'none'
    }
  }

  static show() {
    let selected = SweetSelector.select(input)

    if (selected.length > 1) {
      for (var i = 0; i < selected.length; i++) {
        selected[i].style.display = 'block'
      }
    } else {
      selected.style.display = 'block'
    }
  }

  static addClass(input, add) {
    let selected = SweetSelector.select(input)

    if (selected.length > 1) {
      for (var i = 0; i < selected.length; i++) {
        selected[i].classList.add(add)
        console.log(selected[i].outerHTML);
      }
    } else {
      selected.classList.add(add)
      console.log(selected.outerHTML);
    }
  }

  static removeClass(input, remove) {
    let selected = SweetSelector.select(input)

    if (selected.length > 1) {
      for (var i = 0; i < selected.length; i++) {
        selected[i].classList.remove(remove)
        console.log(selected[i].outerHTML);
      }
    } else {
      selected.classList.remove(remove)
      console.log(selected.outerHTML);
    }
  }
}
