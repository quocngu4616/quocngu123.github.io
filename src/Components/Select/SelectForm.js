import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories, setCourseCategories } from '../../Redux/Action/course';
class SelectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: -1,
        }
    }
    componentDidMount() {
        this.props.dispatch(fetchCategories())
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.handleChooseCourse(this.state.value);
        this.props.displayCouse(this.state.value)
        // console.log(this.state.value);

    }
    onSubmit = e => {
        e.preventDefault();
    }
    handleChooseCourse = id => {
        this.props.dispatch(setCourseCategories(id))
    }
    render() {
        console.log(this.props.listCategories);

        return (
            <div className="col-6 text-right">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group form-group__config">
                        <select className="form-control" name="value" value={this.state.value} onChange={this.onChange}>
                            <option value={-1}>VUI LÒNG CHỌN KHÓA HỌC</option>
                            {/* <option value={1}>LẬP TRÌNH DI ĐỘNG</option>
                            <option value={2}>LẬP TRÌNH FRONT-END</option>
                            <option value={3}>LẬP TRÌNH BACK-END</option>
                            <option value={4}>FULL STACK JAVASCRIPT</option>
                            <option value={5}>FULL STACK JAVA</option> */}
                            {this.props.listCategories.map((item, i) => {
                                return (
                                    <option value={item.maDanhMuc}>{item.tenDanhMuc}</option>
                                )
                            })}
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    listCategories: state.course.categories,
    choosenCategories: state.course.choosenCategory,
})
export default connect(mapStateToProps, null)(SelectForm)