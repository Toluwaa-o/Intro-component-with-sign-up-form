
    
//       if (input.value.match(valid))

let field = document.querySelectorAll(".field")
let input = document.querySelectorAll("input");
let button = document.getElementById("submit-btn")
let valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[hotmail||yahoo||outlook||gmail||icloud]+(?:\.[com]+)*$/;

button.addEventListener("click", function(e){
    e.preventDefault()
    for(let i = 0; i<input.length; i++) {
        if(input[i].value === ""){
            let fieldName = document.querySelectorAll("input")[i].getAttribute("data-name")
            input[i].style.border = "2px solid red"
            input[i].nextElementSibling.style.display = "flex"
            field[i].lastElementChild.textContent = `${fieldName} cannot be empty`
            field[i].lastElementChild.style.display = "flex"
            input[i].style.color = "hsl(0, 100%, 74%)"
            setTimeout(function(){
                input[i].style.border = "0.5px solid hsl(246, 25%, 77%)"
                input[i].nextElementSibling.style.display = "none"
                field[i].lastElementChild.style.display = "none"
                input[i].style.color = "rgba(0, 0, 0, 0.612)"
            }, 4000)
        }else if(!input[2].value.match(valid)){
            input[2].style.border = "2px solid red"
            input[2].nextElementSibling.style.display = "flex"
            field[2].lastElementChild.textContent = `Looks like this is not an email`
            field[2].lastElementChild.style.display = "flex"
            input[2].style.color = "hsl(0, 100%, 74%)"
            setTimeout(function(){
                input[2].style.border = "0.5px solid hsl(246, 25%, 77%)"
                input[2].nextElementSibling.style.display = "none"
                field[2].lastElementChild.style.display = "none"
                input[2].style.color = "rgba(0, 0, 0, 0.612)"
            }, 4000)
        }else {
            input[i].value = ""
        }

    }
})