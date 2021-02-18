// 1.1
var a = 5;
var b = 7;
alert(`Addition: ${a + b}`);
alert(`Subtraction: ${a - b}`);
alert(`Multiplication: ${a * b}`);
alert(`Division: ${a / b}`);

// 1.2
var a = 8;
var b = 15;
var sum = 0;
while (a <= b) {
  sum += a;
  a++;
}
document.write(`Сумма равна ${sum} <br \/> Чётные числа: `);
for (let i = 8; i < 15; i++) {
  if (i % 2 == 0) {
    document.write(`${i} `);
  }
}

// 1.3
var x = 6;
var y = 15;
var z = 4;
res = x += y - x++ * z;
document.write(`Res 1: ${res} <br \/>`);
res = z = --x - y * 5;
document.write(`Res 2: ${res} <br \/>`);
res = y /= x + 5 % z ;
document.write(`Res 3: ${res} <br \/>`);
res = z = x++ + y * 5 ;
document.write(`Res 4: ${res} <br \/>`);
res = x = y - x++ * z ;
document.write(`Res 5: ${res} <br \/>`);

// 1.4
let N = 10;
function fact(n) {
  if (n == 1) {
    return n;
      }
  else return n * fact(n-1);
}
document.write(`Количество маршрутов равно ${fact(N)}`);

// 1.5
var a = 8;
var b = 9;
var c = 12;
var SrAr = 0;
SrAr = (a + b + c) / 3;
document.write(`Среднее арифметическое равно ${SrAr}`);

// 1.6
        let x = 15;
        let y = 5;
        document.write(`Прямоугольник <br \/> <br \/>`);
        for (let i = 0; i < y; i++) {
          for (let j = 0; j < x; j++) {
              document.write('*');
          }
          document.write('<br \/>');
        }
        document.write(`<br \/> Прямоугольный треугольник <br \/> <br \/>`);
        let sym = '*';
        y = 10;
        while (y > 0) {
          document.write(`${sym} <br \/>`);
          sym += '*';
          y--;
        }
        document.write(`<br \/> Равносторонний треугольник <br \/> <br \/>`);
        x = 12;
        let k = 1;
        sym = '*';
        let sym1 = '*';
        for (let i = 0; i < x/2; i++) {
          for (let j = 0; j < x; j++) {
            if (i == 0) {
              if (j == x/2) {
                document.write(`${sym}`);
              }
              else document.write('_');
            }
            else {
              if (j == x/2 - k) {
                document.write(`${sym1}${sym}${sym1}`);
                sym1 += '*';
                k++;
              }
              else document.write('_');
            }
          }
          document.write('<br \/>');
        }
        document.write(`<br \/> Ромб <br \/> <br \/>`);
        k = 1;
        sym = '*';
        sym1 = '*';
        for (let i = 0; i < x/2; i++) {
          for (let j = 0; j < x; j++) {
            if (i == 0) {
              if (j == x/2) {
                document.write(`${sym}`);
              }
              else document.write('_');
            }
            else {
              if (j == x/2 - k) {
                document.write(`${sym1}${sym}${sym1}`);
                sym1 += '*';
                k++;
              }
              else document.write('_');
            }
          }
          document.write('<br \/>');
        }
        x = 12;
        sym = '*';
        sym1 = '*';
        k = 1;
        let count = 1;
        for (let i = 0; i < x/2; i++) {
          for (let j = 0; j < x; j++) {
            if (j > count && j < x - count) {
              document.write(`${sym}`);
            }
            else document.write('_');            
          }
          count++;
          document.write('<br \/>');
        }
        
// 1.7
let V, S;
let p = 3.141592653589793;
let r = 4;
let h = 8;
V = p * r * r * h;
S = 2 * p * r * h + 2 * p * r * r;
document.write(`Объём цилиндра: ${V} <br \/> Площадь поверхности цилиндра: ${S}`);
