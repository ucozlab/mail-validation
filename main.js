var a,b,c,d = false;
document.querySelector('input[type=text][name=name]').onchange = function(val){
    if(this.value.length < 3){
        alert("Your name is too short!");
        this.classList.remove('normal');
    }
    else{
        this.classList.add('normal');
        a = true;
    }
};
document.querySelector('input[type=email][name=email]').onchange = function(val){
    if(this.value.length < 3){
        alert("Your Email is too short!");
        this.classList.remove('normal');
    }
    else{
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (pattern.test(this.value)) {
            this.classList.add('normal');
            b = true;
        } else {
            this.classList.remove('normal');
            alert("Your email is invalid!");
        }
    }
};
document.querySelector('input[type=text][name=subject]').onchange = function(val){
    if(this.value.length < 3){
        alert("Your name is too short!");
        this.classList.remove('normal');
    }
    else{
        this.classList.add('normal');
        c = true;
    }
};
document.querySelector('textarea').onchange = function(val){
    if(this.value.length < 3){
        alert("Your message is too short!");
        this.classList.remove('normal');
    }
    else{
        this.classList.add('normal');
        d = true;
    }
};
document.querySelector('input[type=submit]').addEventListener('click',function(e){
    e.preventDefault();
    if (a && b && c && d) {
        alert('thank you, your email was send');
    } else {
        alert('please fill the mailform fields correctly');
    }
});