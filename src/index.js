import "./styles.css";
/*
Создать функцию createSecretHolder(secret) которая принимает 
любое значение и 
возвращает объект ТОЛЬКО с двумя методами:

getSecret() - возвращает секрет

setSecret() - задает секрет

obj = createSecretHolder(5)

obj.getSecret() # returns 5

obj.setSecret(2)

obj.getSecret() # returns 2

*/
function createSecretHolder(secret) {
  var _secret = secret;

  return {
    getSecret: function () {
      return _secret;
    },

    setSecret: function (secret) {
      _secret = secret;
    }
  };
}
const obj = createSecretHolder(5);

//console.log(obj.getSecret());

//Вам дан объект содержащий языки и оценки по этим языкам.
//Необходимо вернуть массив языков где оценки =>60,
//отсортированный в убывающем порядке по оценкам.

// Вероятно, нужно было приметить filter, не sort

const objct = { Java: 10, Ruby: 80, Python: 65 };
let keysSorted = Object.values(objct);

let m = keysSorted.filter(function (el) {
  return el > 60;
});
m.sort((a, b) => a - b);
//console.log(m);

//Отсортировать массив 32-битных целых чисел
//в порядке возрастания количество бит в этих числах
let arr = [7, 6, 15, 8];

arr.sort((a, b) => countBits(a) - countBits(b));
console.log(arr);

function countBits(el) {
  var count = 0;
  while (el) {
    count += el & 1;
    el >>= 1;
  }
  return count;
}
//идея применить объект ключ - число,значение -биты,потом
// отсортировать по значению

/*const sortByBinary = (arr = []) => {
  const calculateOne = (str = "") => {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "1") {
        res++;
      }
    }
    return res;
  };
  const sorter = (a, b) => {
    const firstCount = calculateOne((a >>> 0).toString(2));
    const secondCount = calculateOne((b >>> 0).toString(2));
    return firstCount - secondCount;
  };
  arr.sort(sorter);
};
sortByBinary(arr);
console.log(arr);*/

//Необходимо изменить функцию так чтобы она возвращала все значения i (0,1,2,3,4).
//Нельзя использовать const и let для объявления переменных.

//for (var i = 0; i < 5; i++) {
// ((i) => setTimeout(() => console.log(i), i * 1000))(i);
//}
