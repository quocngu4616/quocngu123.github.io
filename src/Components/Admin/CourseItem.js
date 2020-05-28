import React, { Component } from 'react'

export default class CourseItem extends Component {
    render() {
        let {course}=this.props
        console.log(course);
        
        return (
            <>
                <tr>
                    <td>
                        <div className="name__wrapper d-flex">
                            <img src={course.hinhAnh} alt="avatar" />
                            <div className="course__name ml-3">
        <h6>{course.tenKhoaHoc}</h6>
                                <span className="badge badge-info">development</span>
                            </div>
                        </div>
                    </td>
                    <td className="pt-4">
        <h6>{course.nguoiTao.taiKhoan}</h6>
                        <div className="badge badge-danger">{course.nguoiTao.tenLoaiNguoiDung}</div>
                    </td>
                    <td className="pt-4">{course.ngayTao}
       </td>
                    <td className="pt-4">
                        <label className="switch"><input type="checkbox" defaultChecked />
                            <span className="slider round" /></label>
                    </td>
                    <td className="pt-4">
                        <button data-toggle="modal" data-target="#courseModal" className="btn btn-info mr-2">
                            <i className="far fa-edit" aria-hidden="true" />
                        </button>

                        <button className="btn btn-danger">
                            <i className="far fa-trash-alt" aria-hidden="true" />
                        </button>
                    </td>
                </tr>
            </>
        )
    }
}
