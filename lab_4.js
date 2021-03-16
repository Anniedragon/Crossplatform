//4.1

    function addition(x, y) {
      document.write(`${x} + ${y} = ${x+y}<br \/>`);
    }
    function subtraction(x, y) {
      document.write(`${x} - ${y} = ${x-y}<br \/>`);
    }
    function multiplication(x, y) {
      document.write(`${x} * ${y} = ${x*y}<br \/>`);
    }
    function divition(x, y) {
      if (y != 0) document.write(`${x} / ${y} = ${x/y}<br \/>`);
      else document.write('Делить на 0 нельзя');
    }

    addition(4, 5);
    subtraction(4, 5);
    multiplication(4, 5);
    divition(4, 5);
    divition(4, 0);

//4.2
    function check_number(x) {
      let flag = 0;
      if (x > 0) document.write('Число положительное<br \/>');
      else if (x < 0) document.write('Число отрицательное<br \/>');
      else document.write('Число равно 0<br \/>');

      if (x % 2 == 0 || x % 3 == 0 || x % 5 == 0 || x % 9 == 0) {
        document.write('Число делится на 2 или 5 или 3 или 6 или 9 без остатка<br \/>');
      }
      for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
          document.write('Число не является простым<br \/>');
          flag = 1;
          break;
        }
      }
      if (flag == 0) document.write('Число является простым<br \/>');
    }

    check_number(123);

//4.3
    let N = 6;
    let top_ = -1;
    let arr = [];

    function GetRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function Stack_push(x) {
      if (top_ == N-1) document.write('Stack is overflow!<br \/>');
      else {
        top_++;
        arr[top_] = x;
        document.write(`${x} `);
      }
    }

    function Stack_pop() {
      if (top_ >= 0) {
        document.write(`${arr[top_]} `);
        top_--;
      }
      else document.write('Stack is empty!<br \/>');
    }

    document.write('Stack<br \/>');
    for (let i = 0; i < N; i++) {
      Stack_push(GetRandomInt(1, 10));
    }
    document.write('<br \/>');
    for (let i = 0; i < N; i++) {
      Stack_pop();
    }
    document.write('<br \/>');

    N = 7;
    arr = [];
    let head = 0;
    let tail = 0;

    function Queue_add(x) {
      if (head == (tail + 1) % N) document.write('Queue is overfloated!<br \/>');
      else {
        arr[tail] = x;
        document.write(`${arr[tail]} `);
			  tail = (tail + 1) % N;
      }
    }

    function Queue_extract() {
      if (head != tail) {
        document.write(`${arr[head]} `);
        head = (head + 1) % N;
      }
      else document.write('Queue is empty!<br \/>');
    }

    document.write('<br \/>Queue<br \/>');
    for (let i = 0; i < N - 1; i++) {
      Queue_add(GetRandomInt(1, 10));
    }
    document.write('<br \/>');
    for (let i = 0; i < N - 1; i++) {
      Queue_extract();
    }
