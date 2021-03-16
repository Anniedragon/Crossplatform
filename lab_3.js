 //3.1     

      let arr = Array(3, 5, -3, 6, 143, 7, 12, -87, 54, 32, -78, 5, 43);
      let max = arr[0];
      for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
          max = arr[i];
        }
      }
      document.write(`Наибольшее значение массива = ${max} <br \/>`);
      let min = arr[0];
      for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
          min = arr[i];
        }
      }
      document.write(`Наименьшее значение массива = ${min} <br \/>`);
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      document.write(`Сумма всех элементов массива = ${sum} <br \/>`);
      let sr = sum / arr.length;
      document.write(`Среднее арифметическое массива = ${sr} <br \/>`);
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
          document.write(`Элемент по индексу ${i} со значением ${arr[i]} не четный <br \/>`);
        }
      }

//3.2
    arr = [[25, -9, 32, 87, 4],
    [-54, 7, 2, 12, 67],
    [5, 78, -92, 124, 9],
    [45, -63, -6, -12, 49],
    [17, 89, 37, -5, 51]];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (i == j) {
          if (arr[i][j] > 0) arr[i][j] = 1;
          else arr[i][j] = 0;
        }
      }
    }
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        document.write(`${arr[i][j]} `);
      }
      document.write('<br \/>');
    }

//3.3
class Stack {

  constructor() {
      this.container = []
  }

  push(element) {
    this.container.unshift(element)
  }

  pop() {
    let arg_local =  this.container.shift();
    document.write(`Element ${arg_local}<br>`);
    return arg_local;
  }
}

let size;
alert('Введите размер стека');
size = prompt();
let stack = new Stack();
alert('Введите элементы стека');
for (let i = 0; i < size; i++) {
  stack.push(prompt("Введите число"));
}
for (let i = 0; i < size; i++) {
  stack.pop();
}

//3.4
class Queue {

  constructor(size) {
        this.head = 0;
        this.tail = 0;
        this.size = size;
        this.arr = new Array(size);
  }

  get() {
     if (this.head == this.tail) {
         document.write(`Очередь пуста`);
         throw new Error('Error 228');
     }
     let result = this.arr[this.tail];
     this.tail = ++this.tail % this.size;
     return result;
  }

  put(element) {
    if (this.tail == (this.head + 1) % this.size) { // проверка на переполнение
			document.write(`Очередь полна <br>`);
			throw new Error('Error 1337');
		}
		this.arr[this.head] = element; // вставка
		this.head = ++this.head % this.size;
		document.write(`Положен элемент ${element} <br>`);
  }
};

let size = 5;
let q = new Ochered(size+1);
for (let i = 0; i < size; i++) {
    q.put(prompt("Введите число"));
}
for(let i = 0; i < size; i++) {
  q.get();
}
