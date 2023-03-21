
    let screen = document.querySelector('.screen');
    let btn = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-g');
    let clear = document.querySelector('.btn-r');


    clear.addEventListener('click',function(e){
        screen.value = "";
    })
    
    equal.addEventListener('click',function(e){
        if(screen.value === ''){
            screen.value = "Please Enter!";
        }
        else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    
    btn.forEach(function(button) {
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
        
    });


