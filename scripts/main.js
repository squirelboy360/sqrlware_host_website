document.addEventListener('DOMContentLoaded',function(){
    var nav_bar = this.getElementById('nav-bar');
})

window.addEventListener('scroll',function(){
    if(window.scroll > 50){
      nav_bar.style.backgroundColor = '000'
      console.log('test pass')
    }else{

    }
})