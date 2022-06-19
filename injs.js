//BT1: Quản lý tuyển sinh
document.getElementById('btnKetqua').onclick=function(){
    var diemChuan=Number(document.getElementById('diemChuan').value);
    var khuVuc=document.getElementById('khuVuc').value;

    var doiTuong=document.getElementById('doiTuong').value;

    var diemMon1=Number(document.getElementById('diemMon1').value);
    var diemMon2=Number(document.getElementById('diemMon2').value);
    var diemMon3=Number(document.getElementById('diemMon3').value);

        var tongDiem=0;
       var ketQua='';
       var diemKV=0;
        var diemDT=0;
    var giatriKV=khuVuc.options;
    giatriKV=khuVuc;
        switch (giatriKV){
            case 'A':{
                diemKV+=2;
                break;
            }
            case 'B':{
                diemKV+=1;
                break;
            }
            case 'C':{
                diemKV+=0.5;
                break;
            }
        }
    var giatriDT=doiTuong.options;
    giatriDT=doiTuong;   
        switch (giatriDT){
            case 'one':{
                diemDT+=2.5;
                break;
            }
            case 'two':{
                diemDT+=1.5;
                break;
            }
            case 'three':{
                diemDT+=1;
                break;
            }
        }
        if(diemMon1>0&&diemMon2>0&&diemMon3>0&&diemMon1+diemMon2+diemMon3+diemKV+diemDT>=diemChuan){
            ketQua='bạn đã Đậu';
            tongDiem=Number(diemMon1+diemMon2+diemMon3+diemKV+diemDT);
        }else{
            ketQua='Bạn đã Rớt';
            tongDiem=Number(diemMon1+diemMon2+diemMon3+diemKV+diemDT);
        }
        document.getElementById('ketQua_b1').innerHTML=ketQua +' ' + 'Tổng điểm của bạn là: '+tongDiem;
}


///Bài Tập 2
document.getElementById('tinhTienDien').onclick=function(){
    var khachHang=document.getElementById('hovaten').value;
    var soKw=Number(document.getElementById('soKw').value);
    ketQua_b2=0;
    if(soKw>0&&soKw<=50){
        ketQua_b2=soKw*500;
    }else if(soKw<=100){
        ketQua_b2=50*500+(soKw-50)*650;
    }else if(soKw<=200){
        ketQua_b2=50*500+500*650+(soKw-100)*850;
    }else if(soKw<=350){
        ketQua_b2=50*500+50*650+100*850+(soKw-200)*1100;
    }else{
        ketQua_b2=50*500+50*650+100*850+150*1100+(soKw-350)*1300;
    }

    document.getElementById('ketQua_b2').innerHTML='Tên Khách hàng:' + khachHang+ ' Số tiền điện là: '+ ketQua_b2;

}





