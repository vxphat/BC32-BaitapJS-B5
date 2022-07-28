//bài 1: Xét điểm học sinh
function doiTuong(){
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
    return diemDoiTuong;
}

function khuVuc(){
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
    return diemKhuVuc;
    }

    function tinhKQ(){
        let diem1 = +document.getElementById('diem1').value;
        let diem2 = +document.getElementById('diem2').value;
        let diem3 = +document.getElementById('diem3').value;
        let diemChuan = +document.getElementById('diemChuan').value;
        let kq = document.getElementById('ketQua-b1');
        let diemDT = doiTuong();
        let diemKV = khuVuc();

        let diemTongKet = 0;
        diemTongKet = diem1 + diem2 + diem3 + diemDT + diemKV;
        console.log(diemTongKet);

        if (diem1 > 10 || diem2 > 10 || diem3 > 10 ){
            kq.innerHTML = 'Điểm nhập vào không hợp lệ';
        }else if (diem1 === 0 || diem2 === 0 || diem3 === 0){
            kq.innerHTML = 'Bạn đã rớt Tốt nghiệp do có môn 0 điểm';
        }else if (diemTongKet >= diemChuan){
            kq.innerHTML = 'Bạn đã đậu Tốt nghiệp. Với Tổng điểm là: ' + diemTongKet + ' điểm.';
        }else{
            kq.innerHTML = 'Bạn đã rớt Tốt nghiệp. Với Tổng điểm là: ' + diemTongKet + ' điểm.';
        }
    }

    //Bài 2: tính tiền điện
    function donGiaDien(){
        let soKw = +document.getElementById('kw').value;
        let donGia = 0;

        if (soKw > 0 && soKw <= 50){
            donGia = 500;
        }else if (soKw > 50 && soKw <= 100){
            donGia = 650;
        }else if (soKw > 100 && soKw <= 150){
            donGia = 850;
        }else if (soKw > 150 && soKw <= 200){
            donGia = 1100;
        }else{
            donGia = 1300;
        }
        return donGia;
    }

    function tinhTienDien(){
        let hoTen = document.getElementById('hoTen').value;
        let donGia = donGiaDien();
        let soKw = +document.getElementById('kw').value;

        let tienDien = soKw * donGiaDien();

        document.getElementById('ketQua-b2').innerHTML = 'Tiền điện tháng này của ' + hoTen + ' là: ' + tienDien.toLocaleString() + ' VNĐ.'

    }
    
    //Bài 3: tính thuế TNCN
    function mucThue(){
        let thuNhap = +document.getElementById('tongThuNhap').value;
        let mucThue = 0;

        if (thuNhap > 0 && thuNhap <= 6e+7){
            mucThue = 0.05;
        }else if(thuNhap > 6e+7 && thuNhap <= 12e+7){
            mucThue = 0.1;
        }else if(thuNhap > 12e+7 && thuNhap <= 21e+7){
            mucThue = 0.15;
        }else if(thuNhap > 21e+7 && thuNhap <= 384e+6){
            mucThue = 0.2;
        }else if(thuNhap > 384e+6 && thuNhap <= 624e+6){
            mucThue = 0.25;
        }else if(thuNhap > 624e+6 && thuNhap <= 960e+6){
            mucThue = 0.3;
        }else{
            mucThue = 0.35;
        }
        return mucThue;
    }

    function tinhThue(){
        let hoTen = document.getElementById('hoTenb2').value;
        let tongThuNhap = +document.getElementById('tongThuNhap').value;
        let nguoiPhuThuoc = +document.getElementById('nguoiPhuThuoc').value;
        let tnChiuThue = 0;
        let mucThue = mucThue();

        tnChiuThue = tongThuNhap - 4e+6 - (nguoiPhuThuoc * 1600000);

        let tienThue = tnChiuThue * mucThue;
        document.getElementById('ketQua-b3').innerHTML = 'Thuế thu nhập cá nhân của ' + hoTenb2 + ' là: ' + tienThue + ' VNĐ';

    }