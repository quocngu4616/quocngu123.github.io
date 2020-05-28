import React, { Component } from 'react'
import { connect } from 'react-redux'
import CourseItem from './CourseItem'
import { fetchCourse, addCourseRequest } from '../../Redux/Action/course'
import { uuid, UUID } from './uuid/uuid'
class course extends Component {
    constructor(props) {
        super(props)
        this.state = {
            course: {
                biDanh: "",
                tenKhoaHoc: "",
                moTa: "",
                hinhAnh: '/img/default-image.jpg',
            },

            // search: ''
        }
    }

    componentDidMount() {
        this.props.fetchCourse()
    }

    onChange = e => {
        this.setState({
            course: {
                ...this.state.course,
                [e.target.name]: e.target.value
            }
        })
    }


    onAddCourse = () => {
        // let ngayTao = new Date();

        this.props.addCourseRequest(
            {
                ...this.state.course,
                maKhoaHoc: UUID(),
                ngayTao: '14/02/2020',
                maNhom: "GP01",
                luotXem: 155,
                danhGia: 0,
                taiKhoanNguoiTao: "Admin",
                maDanhMucKhoaHoc: "development"
            }
        );
    }
    onClearForm = () => {
        this.setState({
            course: {
                biDanh: "",
                tenKhoaHoc: "",
                moTa: "",
                hinhAnh: '/img/default-image.jpg',
            },
            // courseEdit: {}
        })
        // this.props.showEditCourse({})
    }
    render() {

        return (
            <>
                <div className="title"><i className="fas fa-user-shield" aria-hidden="true" /> My Dashboard
       </div>
                <div className="row post__title">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 add__search">
                        <button className="add__course" data-toggle="modal" data-target="#courseModal">
                            <i className="fas fa-plus" aria-hidden="true" /> ADD COURSE
       </button>
                        <input name="search" type="text" placeholder="Search Course" />
                    </div>
                </div>
                <div className="modal" id="courseModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add New Course</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            <div className="modal-body"><div className="form-group">
                                <label htmlFor="tenKhoaHoc">Course's Name</label>
                                <input name="tenKhoaHoc" type="text" className="form-control" />
                            </div>
                                <div className="form-group">
                                    <label htmlFor="moTa">Description</label>
                                    <input name="moTa" type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="hinhAnh">Image</label>
                                    <input name="hinhAnh" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={this.onAddCourse}>Add</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table table-striped table__courses">
                    <thead>
                        <tr>
                            <th>Name<i className="fas fa-sort-amount-up" aria-hidden="true" /></th>
                            <th>Created by</th>
                            <th>Published at</th>
                            <th>Displayed</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* show course */}
                        {this.props.courseList.map((course, i) => {
                            return <CourseItem course={course} />
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}
const mapStateToProps = state => ({
    courseList: state.course.courses
})
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchCourse: () => {
            dispatch(fetchCourse())
        },
        addCourseRequest: course => {
            dispatch(addCourseRequest(course));
        },
        // deleteCourse: maKhoaHoc => {
        //     dispatch(deleteCourse(maKhoaHoc));
        // },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(course)