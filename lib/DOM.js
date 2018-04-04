class DOM {

    static hide(input){

        switch (input[0]) {
            case "#":
                let getId = input.substr(1,input.length)
                document.getElementById(getId).style.display = "none";
                break;
            case ".":
                let getClass = input.substr(1,input.length);
                let getClassDocument = document.getElementsByClassName(getClass)
                for(let i=0;i<getClassDocument.length;i++){
                    getClassDocument[i].style.display = "none"
                }
                break;
            default:
                let getTagDocument = document.getElementsByTagName(input);
                console.log(getTagDocument)
                for(let i=0;i<getTagDocument.length;i++){
                    getTagDocument[i].style.display = "none"
                }
                break;
        }
    }

    static show(input){

        switch (input[0]) {
            case "#":
                let getId = input.substr(1,input.length)
                document.getElementById(getId).style.display = "block";
                break;
            case ".":
                let getClass = input.substr(1,input.length);
                let getClassDocument = document.getElementsByClassName(getClass)
                console.log(getClassDocument)
                for(let i=0;i<getClassDocument.length;i++){
                    getClassDocument[i].style.display = "block"
                }
            default:

                let getTagDocument = document.getElementsByTagName(input);
                for(let i=0;i<getTagDocument.length;i++){
                    getTagDocument[i].style.display = "block"
                }
                break;
        }

    }

    static addClass(source, target){

        let getClassDocument = document.querySelector(source)
        getClassDocument.classList.add(target)
        console.log(getClassDocument)
    }

    static removeClass(source, target){

        let getClassDocument = document.querySelector(source)
        getClassDocument.classList.remove(target)
        console.log(getClassDocument)
    }
}