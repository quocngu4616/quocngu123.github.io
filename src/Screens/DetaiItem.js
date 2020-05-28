import React, { Component } from 'react'
import Header from '../Layout/Header/Header'
import Footer from '../Layout/Footer/Footer'
import { fetchCourseDetail } from '../Redux/Action/course'
import { connect } from 'react-redux'
import DetailCourse from '../Components/DetailCourse/DetailCourse'
class DetaiItem extends Component {
    componentDidMount() {
        this.props.dispatch(fetchCourseDetail(this.props.math.params.id))
    }
    render() {
        return (
            <>
                {/* header */}
                <Header history={this.props.history} />
                {/* contentDetail */}
                <DetailCourse />
                {/* footer */}
                <Footer />


            </>
        )
    }
}
export default connect()(DetaiItem)