let n = +prompt("Nhập số:");

let number = Math.sqrt(n); 

if (number % 1 == 0) {
  alert(n + " là số chính phương");
} else {
  alert(n + " không phải số chính phương");
}