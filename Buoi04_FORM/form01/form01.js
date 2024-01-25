function kiemtra()
{
    var tdn=f.Tendangnhap.value;
    var mk=f.Matkhau.value;

    if(tdn=='')
    {
        alert('Tên đang nhập không được bỏ trống!');
        return false;
    }
    if(mk=='')
    {
        alert('Mật khẩu không được bỏ trống!');
        return false;
    }
    return true;
}