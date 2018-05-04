


window.addEventListener('load',function(){

let sendFields = document.getElementsByClassName('send');
let attachField = document.getElementById('attachm');
let mssgField = document.getElementById('messagetxt');

[...sendFields].forEach(function(sendField){
console.log(arguments);

sendField.addEventListener('click',function(){
	


mssgField.addEventListener('change',function(){

       if (mssgField.value ==="attachment" )
       	{alert("You wrote attachment.Did you mean to attach files?")}

       	else if (mssgField.value ==="attached" )
       	{alert("You wrote attached.Did you mean to attach files?")}

       	else if (mssgField.value ==="attaching" )
       	{alert("You wrote attaching.Did you mean to attach files?")}

       	else {
       		
       	}

})


});

});

});