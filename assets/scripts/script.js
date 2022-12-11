const num1 = document.getElementById('button1');
const num2 = document.getElementById('button2');
const num3 = document.getElementById('button3');
const num4 = document.getElementById('button4');
const num5 = document.getElementById('button5');
const num6 = document.getElementById('button6');
const num7 = document.getElementById('button7');
const num8 = document.getElementById('button8');
const num9 = document.getElementById('button9');
const anybutton = document.querySelectorAll('.button')

const arr = [num1, num4, num7, num8, num9, num6, num3, num2]
num5.addEventListener('click', () => {
 let b = arr[0].textContent
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].textContent = arr[i + 1].textContent;
  } 
  arr[7].textContent = b;
  arr = [num1, num4, num7, num8, num9, num6, num3, num2]
})

arr1 = [num2, num3, num6, num9, num8, num7, num4, num1]
anybutton.forEach(anybutton => {
anybutton.addEventListener('click', () => {
  let a = arr1[0].textContent
  for (let i = 0; i < arr1.length - 1; i++) {
    arr1[i].textContent = arr1[i + 1].textContent;
  } 
  arr1[7].textContent = a;
})
})