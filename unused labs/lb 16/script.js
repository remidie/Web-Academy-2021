/*this is used to allow the code to compute the answers and show confirmation while also logging it in the console*/
function submitForum(){
  let userName=document.userform.input_username.value;
  let userEmail=document.userform.input_email.value;
  let userPhone=document.userform.input_phoneNum.value;
  let userNameResult=document.getElementById("nameResult");
  let userPhoneResult=document.getElementById("phoneNumResult");
  let userEmailResult=document.getElementById("emailResult")
  userNameResult.innerHTML=userName;
  userPhoneResult.innerHTML=userPhone;
  userEmailResult.innerHTML=userEmail;
  console.log(userEmail,userPhone,userName)

  var x = document.getElementById("before");
  var y = document.getElementById("after");
}

function brainTest(){
    var number=prompt("Give me a number")
    var number2=prompt("One number isnt enough")
    var number3=prompt("third number cus why not")
    var userAnswer=prompt("What is " +number +" " +"plus" +" " +number2 +" " +"plus" +" " +number3)
    alert("You answered " +userAnswer)
    alert("unfortunately, you are stupid. The actual answer is " +number+number2+number3)
}