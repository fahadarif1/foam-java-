let btn = document.getElementById('btn')
let allStudentData =[]

btn.addEventListener('click',function(){
let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let email = document.getElementById('email')
let pass = document.getElementById('pass')
let num = document.getElementById('num')
function AddStudent(...data){

allStudentData.push(data)
}
let studentData = new AddStudent(fname.value, lname.value, email.value, pass.value, num.value)

localStorage.setItem('data', JSON.stringify(allStudentData))


fname.value = ''
lname.value = ''
email.value = ''
pass.value = ''
num.value = ''

console.log(allStudentData);

})

console.log( JSON.parse(localStorage.getItem('data')))

console.log(localStorage.getItem('data'));