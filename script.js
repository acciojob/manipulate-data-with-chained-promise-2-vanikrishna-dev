//your JS code here. If required.
const output = document.getElementById("output");

function manipulateArray() {
  const arr = [1, 2, 3, 4];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  });
}

manipulateArray()

  .then((data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = data.filter((num) => num % 2 === 0);
        output.innerText = evenNumbers.toString();
        resolve(evenNumbers);
      }, 1000);
    });
  })

  .then((evenNumbers) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubled = evenNumbers.map((num) => num * 2);
        output.innerText = doubled.toString();
        resolve(doubled);
      }, 2000);
    });
  });