
console.log("I`m here to release a log.");

//window.alert('just a window');

var mydate = function(){
	
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var date = now.getDate();
	var hour = now.getHours();
	if(hour < 10){
		hour = "0" + hour;
	}
	
	var minute = now.getMinutes();
	if(minute < 10){
		minute = "0" + minute;
	}
	
	var second = now.getSeconds();
	if(second < 10){
		second = "0" + second;
	}
	var output = year + "/" + month + "/" + date + " " + hour + ":" + minute + ":" + second;
	return output;
}
var setmydate = function(){
	document.getElementById("time").textContent = "現在時間 : " + mydate();
	setTimeout(setmydate,1000);
}
setmydate();

/*
window.confirm("A yes-no question.");
if(window.confirm("A yes-no question with console.log.")){
	console.log("the user says yes.");
}else{
	console.log("the user says no.");
} 
*/

document.getElementById("inp_smth").onsubmit = function(){
	var ans = window.prompt("請在此輸入訊息");
	if(ans === "找飯店"){
		document.getElementById("user_return").textContent = "找飯店?Txxxxgo!";
	}else{
		document.getElementById("user_return").textContent = ans;
	}
	return false;
}

console.log("-------------for practice-------------")
for(var i=1; i<=10; i++){
	var temp = "";
	for(var j=0; j<i; j++){
		temp += "*";
	}
	console.log(temp);
}

/*
var i = 5
while(i > 0){
	i--;
}
*/

console.log("-------------fizzbuzz-------------------")
var fizzbuzz = function(num){
	if(num%3 === 0 && num%5 === 0){
		return "FizzBuzz!";
	}else if(num%3 === 0){
		return "Fizz";
	}else if(num%5 === 0){
		return "Buzz";
	}else{
		return i;
	}
}

for(var i=1; i<=30; i++){
	console.log(fizzbuzz(i));
}

var todo = ["打掃房間","整理書櫃","處理報告","練習英文","運動"];
for(var i=0; i<5; i++){
	var li = document.createElement("li");
	li.textContent = todo[i];
	document.getElementById("todo").appendChild(li);
}

document.getElementById("todoadd").onsubmit = function(){
	
	var temp = document.getElementById("todoadd").c_todo.value;
	if(temp !== ""){
		var li = document.createElement("li");
		li.textContent = temp;
		document.getElementById("todo").appendChild(li);
		document.getElementById("todoadd").c_todo.value = "";
	}
	
	return false;
}

var count = 0;
document.getElementById("form").onsubmit = function(){
	console.log("button pressed");
	
	if(count === 0){
		var img = document.createElement("img");
		img.src = "img/wah.png";
		img.style.height = "20%";
		img.style.width = "20%";
		img.border = "1px";
		img.id = 'wah';
		document.getElementById("triggered").appendChild(img);
		
		var tt = document.createElement("p");
		tt.textContent = "哇!";
		tt.id = 'wah2'
		document.getElementById("triggered").appendChild(tt);
		count+=1;
	}else if(count === 1){
		document.getElementById('wah').style.visibility = "hidden";
		document.getElementById('wah2').textContent = '哇?';
		count+=1;
	}else if(count === 2){
		document.getElementById('wah').style.visibility = "visible";
		document.getElementById('wah2').textContent = '哇!';
		count-=1;
	}
	
	return false; //chrome wont refresh the page
}

document.getElementById("t_sel").t_sel2.onchange = function(){
	document.getElementById("t_sel3").textContent = document.getElementById("t_sel").t_sel2.value;
}


// Chrome 不支援在local host的網頁使用cookie，要用edge
for(var i=5; i>1; i--){
	Cookies.set('last_'+i+'_log',Cookies.get('last_'+(i-1)+'_log'),{expires:7});
}
Cookies.set('last_1_log',mydate(),{expires:7});

for(var i=1; i<6; i++){
	var li = document.createElement('li');
	li.textContent = Cookies.get('last_'+i+'_log');
	document.getElementById('pre_opage').appendChild(li);
}

var thumbs = document.querySelectorAll('.thumb');
for(var i=0; i<thumbs.length; i++){
	thumbs[i].onclick = function(){
		document.getElementById('big_img').src = this.dataset.image;
	}
}

$(document).ready(function(){
	
	$("#big_img").on("click",function(){
		$("#big_img").slideToggle(1000);
		$("#big_img").slideToggle(1000);
	});
	
	$("#ajax_test").on("click",function(){
		$.ajax({url: 'test.json', dataType: 'json'})
		.done(function(data){
			$(data).each(function(){
				var idName = '#' + this.id;
				$(idName).text(this.text);
			})
		})
		.fail(function(){
			console.log('json not found');
		})
	})
	
})

