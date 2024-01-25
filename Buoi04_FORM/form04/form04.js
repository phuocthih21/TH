function kiemtra()
{
    var ht=f.Hoten.value;
    var n=f.Ngay.value;
    var t=f.Thang.value;
    var nam=f.Nam.value;
    var nn=f.NgheNghiep.value;
    var gc=f.GhiChu.value;
    if(ht=='')
    {
        alert('Họ tên không được để trống!');
        return false;
    }
    if(ht=='')
    {
        alert('Họ tên không được để trống!');
        return false;
    }
    if(n==''|| t==''|| nam=='')
    {
        alert('Ngày sinh không được để trống!');
        return false;
    }
    if(nn=='')
    {
        alert('Nghề nghiệp không được để trống!');
        return false;
    }
    if(gc=='')
    {
        alert('Ghi chú không được để trống!');
        return false;
    }
    return true

}