//5.1
    let N = 6;
    let arr = [];
    class Stack {
      st_push(x) {
        arr.push(x);
        document.write(`${x} `);
      }

      st_pop() {
        document.write(`${arr.pop()} `);
      }
    }

    function GetRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let stack = new Stack();
    for (let i = 0; i < N; i++) {
      stack.st_push(GetRandomInt(1, 10));
    }
    document.write('<br \/>');
    for (let i = 0; i < N; i++) {
      stack.st_pop();
    }

//5.2
    N = 6;
    let arr = [];
    class Queue {
      qu_add(x) {
        arr.push(x);
        document.write(`${x} `);
      }

      qu_extract() {
        document.write(`${arr.shift()} `);
      }
    }

    function GetRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let queue = new Queue();
    for (let i = 0; i < N; i++) {
      queue.qu_add(GetRandomInt(1, 10));
    }
    document.write('<br \/>');
    for (let i = 0; i < N; i++) {
      queue.qu_extract();
    }

//5.3
    class Node {
      constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
      }
    }

    class LinkList {
      constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
      }

      ShowSize() {
        return this.size;
      }

      AddToBegin(data) {
        const NewNode = new Node(data);
         NewNode.next = this.first;
         if (this.first) this.first.previous = NewNode;
         else this.last = NewNode;
         this.first = NewNode;
         this.size++;
      }

      AddToEnd(data) {
        const NewNode = new Node(data);
        NewNode.last = this.last;
        if (this.last) this.last.next = NewNode;
        else this.first = NewNode;
        this.last = NewNode;
        this.size++;
      }

      DeleteFirst() {
        if (!this.first) document.write('Первого элемента нет <br \/>');
        let data = this.first.data;
        this.first = this.first.next;
        if (this.first) this.first.previous = null;
        else this.last = null;
        this.size--;
      }

      DeleteLast() {
        if (!this.last) document.write('Последнего элемента нет <br \/>');
        let data = this.last.data;
        this.last = this.last.previous;
        if (this.last) this.last.next = null;
        this.size--;
      }

      Search(data) {
        let flag = 0;
        let current = this.first;
        while (current) {
          if (current.data == data) {
            document.write(`Элемент ${data} есть <br \/>`);
            flag = 1;
            break;
          }
          current = current.next;
        }
        if (flag == 0) document.write(`Элемента ${data} нет <br \/>`);
      }

      ShowList() {
        const list = [];
        let current = this.first;
        while (current) {
          list.push(current.data);
          current = current.next;
        }
        for (let i = 0; i < this.size; i++) {
          document.write(`${list[i]} `);
        }
        document.write('<br \/>');
      }
    }

    function GetRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let list = new LinkList();
    for (let i = 0; i < 6; i++) {
      if (i % 2 == 0) list.AddToEnd(GetRandomInt(1,10));
      else list.AddToBegin(GetRandomInt(1, 10));
    }
    list.ShowList();
    list.Search(GetRandomInt(1, 10));
    list.DeleteFirst();
    list.DeleteLast();
    list.ShowList();
