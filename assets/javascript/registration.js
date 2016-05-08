/**
 * 
 */
"use strict"
var usernameinput = document.getElementsByName("nameuser");
var logininput = document.getElementsByName("login");
var passinput = document.getElementsByName("password")[0]; 
var confpassinput = document.getElementsByName("confirm_password")[0];
var formreg=document.forms.reg;


passinput.onkeyup = function(){
	var lengthinputtext=passinput.value.length;
	if (lengthinputtext<7){
		document.getElementById('messagepass').innerHTML="пароль должен быть больше 8 символов";
		} else document.getElementById('messagepass').innerHTML="пароль подходит";	
}

confpassinput.onkeyup = function(){
	if (passinput.value != confpassinput.value) {
		document.getElementById('messageconfpass').innerHTML="Пароли не совпадают";
	} else document.getElementById('messageconfpass').innerHTML=""
}

formreg.onsubmit = function(){
	if (usernameinput.value=="" || logininput.value=="" || passinput.value=="" || confpassinput.value=="" || passinput.value!=confpassinput.value){
		document.getElementById('errmessage').innerHTML="Форма заполнена не полностью либо пароли не совпадают";
		return false
	} else {return formreg.submit}
}