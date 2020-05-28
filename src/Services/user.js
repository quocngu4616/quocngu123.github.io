import axios from 'axios'
import * as yup from 'yup'
export const signupUserSchema = yup.object().shape({
    taiKhoan: yup.string().required("không được bỏ trống"),
    matKhau: yup.string().required("không được bỏ trống"),
    hoTen: yup.string().required("không được bỏ trống"),
    email: yup.string().required("không được bỏ trống").email("email đã tồn tại"),
    soDT: yup.string().required("không được bỏ trống").matches(/^[0-9]+$/),
    maNhom: yup.string().required("cần chọn mã nhóm")
})
class UserService {
    signUp(user) {
        return axios({
            method: 'POST',
            url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data: user //đối với phương thức post thì có data để gửi lên backend
        })
    }
    logIn(user){
        return axios({
            method:'POST',
            url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data:user
        })
    }
    fetchUsers(){
        return axios({
            method:"GET",
            url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01"
        })
    }
    addUsers(user){
        const userLogin=JSON.parse(localStorage.getItem("userLogin"))
        return axios({
            method:"POST",
            url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
            data:user,
            headers:{
                Authorization:"Bearer  "+userLogin.accessToken
            }
        })

    }
    deleteUsers(taikhoan){
        const userLogin=JSON.parse(localStorage.getItem("userLogin"))
        return axios({
            method:"DELETE",
            url:`http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taikhoan}`,
            headers:{
                Authorization:"Bearer  "+userLogin.accessToken
            }
        })
    }
}
export default UserService
