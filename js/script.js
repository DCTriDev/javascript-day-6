//Bai tap 1 In Chan Le
let ketQuaChanLeForEl = document.querySelector('#ket-qua-chan-le-for')
let ketQuaChanLeWhileEl = document.querySelector('#ket-qua-chan-le-while')
let btnChanLe = document.querySelector('#btn-chan-le')
btnChanLe.addEventListener('click', function () {
    let n = 100
    let soChanFor = ''
    let soChanWhile = ''
    let soLeFor = ''
    let soLeWhile = ''
    for (let i = 1; i < n; i++) {
        if (i % 2 == 0) {
            soChanFor += i + " "
        } else {
            soLeFor += i + " "
        }
    }
    let temp = 1
    while (temp < n) {
        if (temp % 2 == 0) {
            soChanWhile += temp + " "
        } else {
            soLeWhile += temp + " "
        }
        temp++
    }
    ketQuaChanLeForEl.innerHTML = 'Vòng lặp FOR: Số chẵn là: ' + soChanFor + '<br>' + 'Số lẻ là: ' + soLeFor
    ketQuaChanLeWhileEl.innerHTML = 'Vòng lặp WHILE: Số chẵn là: ' + soChanWhile + '<br>' + 'Số lẻ là: ' + soLeWhile

})

//Bai tap 2 Tong so chan
let inputBT2El = document.querySelector('#input-BT2')
let ketQuaTongSoChanForEl = document.querySelector('#ket-qua-tong-so-chan-for')
let ketQuaTongSoChanWhileEl = document.querySelector('#ket-qua-tong-so-chan-while')
let btnTongSoChan = document.querySelector('#btn-tong-so-chan')

btnTongSoChan.addEventListener('click', function () {
    let inputBT2 = inputBT2El.value * 1
    let tongSoChanFor = 0
    let tongSoChanWhile = 0
    for (let i = 0; i <= inputBT2; i++) {
        if (i % 2 == 0) {
            tongSoChanFor += i
        }
    }
    let temp = 0
    while (temp <= inputBT2) {
        if (temp % 2 == 0) {
            tongSoChanWhile += temp
        }
        temp++
    }
    ketQuaTongSoChanForEl.innerHTML = 'Vòng lặp FOR: Tổng số chẵn là: ' + tongSoChanFor
    ketQuaTongSoChanWhileEl.innerHTML = 'Vòng lặp WHILE: Tổng số chẵn là: ' + tongSoChanWhile
})
// Bai tap 3 So luong chia het cho 3
let btnChiaHet = document.querySelector('#btn-chia-het')
let ketQuaChiaHetForEl = document.querySelector('#ket-qua-chia-het-for')
let ketQuaChiaHetWhileEl = document.querySelector('#ket-qua-chia-het-while')

btnChiaHet.addEventListener('click', function () {
    let n = 1000
    let ketQuaChiaHetFor = 0
    let ketQuaChiaHetWhile = 0
    for (let i = 0; i <= n; i++) {
        if (i % 3 == 0) {
            ketQuaChiaHetFor++
        }
    }
    let temp = 0
    while (temp <= n) {
        if (temp % 3 == 0) {
            ketQuaChiaHetWhile++
        }
        temp++
    }
    ketQuaChiaHetForEl.innerHTML = 'Vòng lặp FOR: Số lượng số chia hết cho 3 là: ' + ketQuaChiaHetFor
    ketQuaChiaHetWhileEl.innerHTML = 'Vòng lặp WHILE: Số lượng số chia hết cho 3 là: ' + ketQuaChiaHetWhile
})

//Bai tap 4 Tim so nguuyen duong nho nhat
let btnTimSoNhoNhat = document.querySelector('#btn-tim-so-nho-nhat')
let soNhoNhatEl = document.querySelector('#so-nho-nhat')

btnTimSoNhoNhat.addEventListener('click', function () {
    let temp = 0
    let n = 10000
    let tongBT4 = 0
    while (tongBT4 <= n) {
        temp++
        tongBT4 += temp
    }
    soNhoNhatEl.innerHTML = 'Số n nhỏ nhất là: ' + temp
})

//Bai tap 5 Tinh Tong S(n)
let inputNBT5El = document.querySelector('#input-n-BT5')
let inputXBT5El = document.querySelector('#input-x-BT5')
let btnTongBT5 = document.querySelector('#btn-tong-BT5')
let ketQuaTongBT5Cach1El = document.querySelector('#ket-qua-tong-cach1-BT5')
let ketQuaTongBT5Cach2El = document.querySelector('#ket-qua-tong-cach2-BT5')

btnTongBT5.addEventListener('click', function () {
    let inputN = inputNBT5El.value * 1
    let inputX = inputXBT5El.value * 1
    let tongBT5Cach1 = 0
    let tongBT5Cach2 = 0

    for (let i = 1; i <= inputN; i++) {
        tongBT5Cach1 += Math.pow(inputX, i)
    }

    for (let i = 1; i <= inputN; i++) {
        tongBT5Cach2 += SoMu(inputX, i)
    }
    ketQuaTongBT5Cach1El.innerHTML = 'Kết quả cách 1 dùng thư viện hàm Math.pow() là: ' + tongBT5Cach1
    ketQuaTongBT5Cach2El.innerHTML = 'Kết quả cách 2 dùng hàm tự viết là: ' + tongBT5Cach2

    function SoMu(number, index) {
        if(index==1)
            return number
        else return SoMu(number,index-1)*number
    }
})

//Bai tap 6 Tinh giai thua
let inputBT6El = document.querySelector('#input-BT6')
let btnGiaiThua = document.querySelector('#btn-giai-thua')
let ketQuaGiaiThuaEl = document.querySelector('#ket-qua-giai-thua')

btnGiaiThua.addEventListener('click', function () {
    let inputBT6 = inputBT6El.value * 1
    let giaiThua = 1
    for (let i = 1; i <= inputBT6; i++) {
        giaiThua *= i
    }
    ketQuaGiaiThuaEl.innerHTML = 'Kết quả là: ' + giaiThua
})

//Bai tap 7 Xuat the div
let btnTaoTheDiv = document.querySelector('#tao-the-div')
let xuatTheDivEl = document.querySelector('#xuat-the-div')

btnTaoTheDiv.addEventListener('click', function () {
    let xuatTheDiv = ''
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            xuatTheDiv += '<div class="bg-danger py-2"></div>'
        } else xuatTheDiv += '<div class="bg-primary py-2"></div>'
    }
    xuatTheDivEl.innerHTML = xuatTheDiv
})

//Bai tap 8 Xuat so nguyen to
let inputBT8El = document.querySelector('#input-BT8')
let btnSoNguyenTo = document.querySelector('#btn-so-nguyen-to')
let ketQuaSoNguyenToEl = document.querySelector('#ket-qua-so-nguyen-to')

btnSoNguyenTo.addEventListener('click', function () {
    let inputBT8 = inputBT8El.value * 1
    let soNguyenTo = ''
    for (let i = 2; i <= inputBT8; i++) {
        if (KiemTraSoNguyenTo(i)) {
            soNguyenTo += i + ' '
        }
    }
    ketQuaSoNguyenToEl.innerHTML = 'Các số nguyên tố là: ' + soNguyenTo

    function KiemTraSoNguyenTo(number) {
        if (number == 2 || number == 3)
            return true
        else {
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i == 0)
                    return false
            }
            return true
        }
    }
})