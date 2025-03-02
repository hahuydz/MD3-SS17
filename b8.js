let date1 = prompt("Nhập ngày thứ nhất (YYYY-MM-DD):");
let date2 = prompt("Nhập ngày thứ hai (YYYY-MM-DD):");

let d1 = new Date(date1);
let d2 = new Date(date2);

let difference = Math.abs(d2 - d1); 
let days = difference / (1000 * 60 * 60 * 24); 

alert("Độ lệch là " + days + " ngày");