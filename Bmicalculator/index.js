const body=document.querySelector('body');
const height=document.querySelector('#height');
const weight=document.querySelector('#weight');
const result=document.querySelector('result');
const form = document.querySelector('form');
form.addEventListener('submit',function(e){
  e.preventDefault(); // rokhne kai liye 
 
  const height = parseInt(document.querySelector('#height').value); // parseInt convert to integer
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);// to fixed use for jyda se  jyda 2 decimal hi ayye
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }

})

