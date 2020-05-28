import React, { Component } from 'react'
import SearchCouse from '../../Containers/SearchCouse'
import SelectForm from '../../Components/Select/SelectForm'
import ProductItems from '../../Containers/ProductItems'
import { connect } from 'react-redux'
import { fetchCourse, setCourseCategories } from '../../Redux/Action/course'
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IsDisplay: false
        }
    }
    componentDidMount() {

        this.props.dispatch(fetchCourse())
        // this.props.dispatch(setCourseCategories('BackEnd'))
    }
    displayCouse = (data) => {
        if (data !== -1) {
            this.setState({
                IsDisplay: true,
            });
            this.props.dispatch(setCourseCategories('BackEnd'))
        }


    }
    render() {
        return (
            <section className="container content">
                <div className="row mb-3">
                    <div className="col-6">
                        <h3 className>Danh sách khóa học: </h3>
                    </div>
                    <div className="col-6">
                        <div className="input">
                            {/* sử dụng input group */}
                            <SearchCouse />
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    {/* SELECT FORM */}
                    <SelectForm displayCouse={this.displayCouse} />
                </div>
                <div className="row product__items">

                    {this.state.IsDisplay ? this.props.courseCategories.map((item, i) => {
                        return (
                            <div key={i} className="col-3">
                                <ProductItems item={item} />
                            </div>
                        )
                    }) : this.props.allCourse.map((item, i) => {
                        return (
                            <div key={i} className="col-3">
                                <ProductItems item={item} />
                            </div>
                        )
                    })}


                </div>

            </section>
        )
    }
}
const mapStateToProps = state => ({
    allCourse: state.course.courses,
    courseCategories: state.course.courseCategories
})
export default connect(mapStateToProps, null)(Content)