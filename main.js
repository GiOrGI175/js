// let names = 'giorgi';

// function sum(a, b, name) {
//   console.log('this is sum function');
//   //   console.log(a + b);
//   return a + b;
// }

// const result = sum(10, 20, names);

// console.log(result, 'res');

// const sub = (a, b) => {
//   return a - b;
// };

// function sumAllNums(...args) {
//   console.log(args);
// }

// sumAllNums(10, 20, 30, 50, 60);

// function sumAllNums2(a, b, ...args) {
//   console.log(a, b);
//   console.log(args);
// }

// sumAllNums2(10, 20, 30, 50, 60);

// function sumAllNums3({ amount, personId, type = 'DEPOSITE' }) {}

// sumAllNums3({ amount: 10, personId: 'adasdad', type: 'deposite' });

// setTimeout(() => {
//   console.log('second');
// }, 0);

// function first() {
//   console.log('first');
// }

// first();

// function a(callBakc) {
//   setTimeout(() => {
//     console.log('a');

//     callBakc();
//   }, 2000);
// }

// function b() {
//   setTimeout(() => {
//     console.log('b');
//   }, 500);
// }

// a(b);

// const h1 = document.querySelector('h1');
// const start = document.querySelector('#start');
// const stop = document.querySelector('#stop');
// const reset = document.querySelector('#reset');

// let count = 0;

// let interval;
// start.addEventListener('click', () => {
//   clearInterval(interval);
//   interval = setInterval(() => {
//     count++;
//     h1.textContent = count;
//   }, 1000);
// });

// stop.addEventListener('click', () => {
//   clearInterval(interval);
// });

// reset.addEventListener('click', () => {
//   count = 0;
//   h1.textContent = count;
//   clearInterval(interval);
// });

const fetchData = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await resp.json();
  console.log(users);
};
fetchData();

const input = document.querySelector('input');
const container = document.querySelector('.container');

let interval;

input.addEventListener('input', async (e) => {
  const title = e.target.value;

  clearTimeout(interval);
  interval = setTimeout(async () => {
    const resp = await fetch(
      `https://api.escuelajs.co/api/v1/products?title=${title}`
    );
    const data = await resp.json();
    displayData(data);
  }, 300);
});

function displayData(data) {
  const html = data.map(
    (el) =>
      `
        <div>
            <h1>${el.title}</h1>
        </div>
     `
  );

  container.innerHTML = html;
}

window.addEventListener('mousemove', (e) => {
  console.log('x', e.clientX);
  console.log('y', e.clientY);
});
