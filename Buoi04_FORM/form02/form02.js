
function KiemTra()
{
    var ht = f.Hoten.value;
    var dc = f.Diachi.value;
    var e = f.Email.value;
    var dt = f.DT.value;
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if(ht == '')
    {
        alert('Họ và tên không được bỏ trống!');
        return false;
    }

    if(dc == '')
    {
        alert('Địa chỉ không được bỏ trống!');
        return false;
    }

    if(e == '')
    {
        alert('Email không được bỏ trống!');
        return false;
    }

    if(dt == '')
    {
        alert('Điện thoại không được bỏ trống!');
        return false;
    }
    if(!emailPattern.test(e))
    {
        alert('Địa chỉ email ko hợp lệ!');
        return false;
    }

    return true;
}