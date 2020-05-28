import axios from 'axios'
class CourseService{
    //lấy danh mục 
    fetchCategories(){
        return axios({
            method:"GET",
            url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc"
        })
    }
    //lấy khóa học théo danh mục
    setCourseCategories(id){
        return axios({
            method:"GET",
            url:`http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${id}&MaNhom=GP01`
        })
    }
    //lấy danh sách khóa học
    fetchCourse(){
        return axios({
            method:"GET",
            url:'http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01'
        })
    }
    // lấy chi tiết khóa học
    fetchCourseDetail(id){
        return axios({
            method:"GET",
            url:`http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`
        })
    }

    // thêm khóa học admin
    addCourseRequest(course){
        return axios({
            method:"POST",
            url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc",
            data:course
        })
    }
}
export default CourseService