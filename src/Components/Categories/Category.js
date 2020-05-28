import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { courseService } from '../../Services'
import {setCourseCategories, fetchCategories} from '../../Redux/Action/course'
class Category extends Component {
    
    componentDidMount() {
        this.props.dispatch(fetchCategories())
    }
    //khi bấm vào categories thì phải chạy hàm setCourseCategory để dispatch action lên store
    //truyền id của categories đó vào action =>set động =>fetch khóa học categories đó
    _chooseCategories = id => {
        this.props.dispatch(setCourseCategories(id))
    }
    render() {

        return (
            <ul className="nav nav-pills">
                {this.props.listCategories.map((item, i) => {
                    return (
                        <li key={i} className="nav-item"><a className={this.props.choosenCategories === item.maDanhMuc
                            ? "nav-link active show"
                            : "nav-link"}
                            data-toggle="pill"
                            href={this.props.choosenCategories}
                            onClick={() => this._chooseCategories(item.maDanhMuc)}
                        >
                            {item.tenDanhMuc}
                        </a>
                        </li>
                    )
                })}
                    
            </ul>
        )
    }
}
const mapStateToProps = state => {
    return {
        listCategories: state.course.categories,
        choosenCategories: state.course.choosenCategory,
        // coursesList: state.course.courses
    }
}
export default connect(mapStateToProps, null)(Category)