class SweetSelector{

    static select(input){

        let selected;
        switch (input[0]) {
            case "#":    
                let getId = input.substr(1,input.length);
                selected = document.getElementById(getId);
                break;
            case ".": 
                let getClass = input.substr(1,input.length);
                selected = document.getElementsByClassName(getClass);
                break;
            default:
                selected = document.getElementsByTagName(input)
                ;break;
        }

        console.log(selected)
    }
}