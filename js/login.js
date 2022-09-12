/*
 *Last modified: 2022-06-26 13:50:19
 *Url: https://www.axui.cn
*/
let blockLogin = document.querySelector('.block-login'),
    blockReg = document.querySelector('.block-reg'),
    btnLogin = document.querySelector('.btn-login'),
    btnReg = document.querySelector('.btn-reg');

    btnLogin.onclick =  function(){
        blockLogin.style.display = 'block';
        blockReg.style.display = 'none';
    }
    btnReg.onclick =  function(){
        blockReg.style.display = 'block';
        blockLogin.style.display = 'none';
    }
