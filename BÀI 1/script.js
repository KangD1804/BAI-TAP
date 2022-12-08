// parseFloat để chuyển dữ liệu nhập (dạng chuỗi) về số thập phân, 10 để chỉ hệ thập phân (decimal)
// prompt(message: tin nhắn đến người dùng, defaultValue: định nghĩa dạng dữ liệu.

//Bài 1: tính tổng điểm và điểm trung bình
// var x = parseFloat(prompt("nhập điểm môn lý:", "0"),10);
// var y =parseFloat(prompt("nhập điểm môn hóa:", "0"),10);
// var z =parseFloat(prompt("nhập điểm môn sinh:", "0"),10);
// const sum = x+y+z;
// const avg = (sum) / 3;
// alert("Tổng điểm 3 môn: " +sum);
// alert("Điểm trung bình 3 môn: " +avg);

// Bài 2: Chuyển đổi độ C sang độ F
// var x = parseFloat(prompt("nhập độ C:", "0"),10);
// var degreeF = 32+ (x*9)/5;
// alert("Độ F: " +degreeF);

//Bài 3: Tính diện tích hình tròn:
// var x = parseFloat(prompt("Nhập bán kính hình tròn: ", "0"), 10);
// var area = x*x*Math.PI;
// alert("Diện tích hình tròn với bán kính " +x + " là " +area);

//Bài 4: Tính chu vi hình tròn:
var x = parseFloat(prompt("Nhập bán kính hình tròn: ", "0"), 10);
var perimeter = 2*x*Math.PI;
alert("Chu vi hình tròn với bán kính " +x + " là " +perimeter);
