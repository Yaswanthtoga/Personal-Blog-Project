var btn = document.querySelector("button");
var fname = document.querySelector("#fname");
var sname = document.querySelector("#sname");
var mail = document.querySelector("#email");
var msg = document.querySelector("text");

var body = fname+" "+sname;


btn.addEventListener("click",(e)=>{
  e.preventDefault();
  Email.send({
    Host : "smtp.gmail.com",
    Username : 'yaswa779@gmail.com',
    Password : "yash rohit",
    To : 'yaswa779@gmail.com',
    From : mail,
    Subject : msg,
    Body : body
}).then(
  message => alert(message)
);
})
