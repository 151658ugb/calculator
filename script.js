//กรอบใช้สำหรับใส่ตัวเลข และครื่องหมายเพื่อคำนวณ
let display = document.getElementById('display');

//ฟังก์ชันการทำงานของ operators
function add(value) {
    display.value += value;
}

//ฟังก์ชัน C ในการลบ
function clearDisplay() {
    display.value = '';
}

//ฟังก์ชัน = ในการคำนวณ
function equal_to() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}