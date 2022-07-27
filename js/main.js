function doiTuong(diemDoiTuong){
let doiTuong = +document.getElementById('doiTuong').value;
let diemDoiTuong = 0;

switch(doiTuong){
    case 1: 
    diemDoiTuong += 2.5;
    break;
    case 2:
    diemDoiTuong += 1.5;
    break;
    case 3:
    diemDoiTuong += 1;
    break;
    default:
        diemDoiTuong = 0;
}
}

function khuVuc(diemKhuVuc){
    let khuVuc = document.getElementById('khuVuc').value;
    let diemKhuVuc = 0;
    
    switch(khuVuc){
        case "A": 
        diemKhuVuc += 2;
        break;
        case "B":
            diemKhuVuc += 1;
        break;
        case "C":
            diemKhuVuc += 0.5;
        break;
        default:
            diemKhuVuc = 0;
    }
    }

    function tinhKQ(){
        let diem1 = +document.getElementById('diem1').value;
        let diem2 = +document.getElementById('diem2').value;
        let diem3 = +document.getElementById('diem3').value;
        let diemChuan = +document.getElementById('diemChuan').value;
        let kq = document.getElementById('ketQua-b1');

        let diemTongKet = 0;
        diemTongKet = diem1 + diem2 + diem3 + khuVuc(diemKhuVuc) + doiTuong(diemDoiTuong);
        console.log(diemTongKet);

        if (diem1 > 10 || diem2 > 10 || diem3 > 10){
            kq.innerHTML = 'Điểm nhập vào không hợp lệ';
        }else if (diem1 === 0 || diem2 === 0 || diem3 === 0){
            kq.innerHTML = 'Bạn đã rớt Tốt nghiệp do có môn 0 điểm';
        }

        if (diemTongKet >= diemChuan){
            kq.innerHTML = 'Bạn đã đậu Tốt nghiệp. Với Tổng điểm là: ' + diemTongKet + ' điểm.';
        }else{
            kq.innerHTML = 'Bạn đã rớt Tốt nghiệp. Với Tổng điểm là: ' + diemTongKet + ' điểm.';
        }
    }