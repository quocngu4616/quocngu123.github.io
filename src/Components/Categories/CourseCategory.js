import React, { Component } from 'react'
// import { setCourseCategories } from '../../Redux/Action/course'
import { connect } from 'react-redux'
import ProductItems from '../../Containers/ProductItems'
import { setCourseCategories } from '../../Redux/Action/course'

class CourseCategory extends Component {
    componentDidMount(){
        this.props.dispatch(setCourseCategories('BackEnd'))
    }
    render() {
        return (
            <div className="tab-pane container active show" id={this.props.courseCategories.maDanhMucKhoaHoc}>
                {/* PRODUCT ITEMS */}
                <div className="product__items d-flex">
                    {this.props.courseCategories.map((item, i) => {
                        return (
                            <ProductItems key={i} item={item} />
                        )
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        courseCategories: state.course.courseCategories
    }
}
export default connect(mapStateToProps, null)(CourseCategory)