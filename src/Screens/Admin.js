import React, { Component } from 'react'
import Course from '../Components/Admin/Course'
import User from '../Components/Admin/User'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { SET_CREDENTIALS_EMPTY} from '../Redux/Action/type'
import { createAction } from '../Redux/Action'
import { notify } from '../Services/notify/Notify'
import { fetchUsers } from '../Redux/Action/user'

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: true,
            user: false,
        }
    }
    componentDidMount() {
        this.props.dispatch(fetchUsers())
    }
    signOut = () => {
        this.props.dispatch(createAction(SET_CREDENTIALS_EMPTY, {}));
        localStorage.removeItem("credentials");
        notify('success', 'ĐĂNG XUẤT THÀNH CÔNG');
        this.props.history.push('./')
    }

    handleChange = param => {
        this.setState({
            course: false,
            user: false,
            [param]: true  //hỏi lại
        })
    }
    showMenu = () => {
        let { course, user } = this.state;
        if (course) {
            return <Course />
        }
        else if (user) {
            return <User />
        }
    }
    render() {
        return (
            <div className="container-fluid admin__panel px-0">
                <div>
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 px-0">
                        <div className="admin__header">
                            <nav className="navbar navbar-expand-md bg-dark px-4">
                                <a className="navbar-brand" href="#1"><i className="fas fa-cogs" aria-hidden="true" />
                                    Admin Panel
   </a>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="./"><i className="fas fa-home" aria-hidden="true" /> Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#1" onClick={() => this.signOut()}><i className="fas fa-power-off" aria-hidden="true" /> SignOut</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="row admin__content px-0">
                    <div className=" col-sm-2 col-md-2 col-lg-2 col-xl-2 px-0">
                        <div className="admin__manager">
                            <div className="title"><i className="fas fa-tools" aria-hidden="true" /> Management
       </div>
                            <ul className="px-0">
                                <li className ><i className="fas fa-chart-line" aria-hidden="true" /> Dashboard
       </li>
                                {this.state.course ?
                                    <li className="active" onClick={() => this.handleChange("course")}><i className="fas fa-graduation-cap" aria-hidden="true" /> Courses </li>
                                    :
                                    <li className="" onClick={() => this.handleChange("course")}><i className="fas fa-graduation-cap" aria-hidden="true" /> Courses</li>
                                }
                                {this.state.user ?
                                    <li className="active" onClick={() => this.handleChange("user")}><i className="fas fa-user-tag" aria-hidden="true" /> Users
                                <span className="badge badge-danger">20</span>  </li>
                                    : <li className onClick={() => this.handleChange("user")}><i className="fas fa-user-tag" aria-hidden="true" /> Users
                                                         <span className="badge badge-danger">20</span></li>
                                }
                                <li className><i className="fas fa-pencil-ruler" aria-hidden="true" /> Messages
       <span className="badge badge-danger">6</span>
                                </li>
                                <li className><i className="fas fa-gavel" aria-hidden="true" /> Rules
       </li>
                                <li className><i className="fas fa-toolbox" aria-hidden="true" /> Utilities
       </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 admin__dashboard pl-4">
                        {/* show component */}
                        {this.showMenu()}
                    </div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps=state=>{

// }
export default connect()(Admin)
