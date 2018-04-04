class SweetSelector{

    static select(input){

        let selected;
        switch (input[0]) {
            case "#":    
                let getId = input.substr(1,input.length);
                selected = document.querySelector(input)
                break;
            case ".": 
                let getClass = input.substr(1,input.length);
                selected = document.querySelectorAll(input)
                break;
            default:
                selected = document.querySelectorAll(input)
                ;break;
        }

        console.log(selected)
    }
}