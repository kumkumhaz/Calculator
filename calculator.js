let string = "";
let buttons = document.querySelectorAll('.buttons');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
     try{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'del' ){
            string = string.slice(0,-1);
            // string = string + substr(0, value.length - 1);
            document.querySelector('input').value = string;

        }
        else if(e.target.innerHTML == 'AC'){
            string = '';
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string; 
        }
     }
     catch{
        string = 'Error'
     }
    })
})
