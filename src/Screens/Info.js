import React, { Component } from 'react'
import Header from '../Layout/Header/Header'
import { connect } from 'react-redux'
import InfoItem from '../Containers/InfoItem'
class Info extends Component {
    render() {
        return (
            <>
                {/* //header */}
                <Header history={this.props.history}/>
                {/* //content ìnfo */}
                <div className="container contain">
                    <div className="row">
                        <div className="col-4 user__category">
                            <div className="user__avatar">
                                <img src="/img/avatar.png" alt="avatar" />
                            </div>
                            <div className="user__info">
        <div className="fullname">{this.props.userList.taiKhoan}</div>
                                <div className="bio">Student</div>
                            </div>
                            <div className="user__edit">
                                <button className="profile__btn">MY PROFILE</button>
                                <div className="edit__profile "><i className="fas fa-certificate" aria-hidden="true" /> Certificates</div>
                                <div className="edit__profile "><i className="fas fa-users-cog" aria-hidden="true" /> Account</div>
                                <div className="edit__profile "><i className="fas fa-cog" aria-hidden="true" /> Edit Profile</div>
                            </div>
                        </div>
                        <div className="col-8 user__course">
                            <div className="my__profile">
                                <div className="user__title">
                                    <h1>My Profile</h1>
                                    <div className="social"><i className="fab fa-facebook-f" aria-hidden="true" /><i className="fab fa-twitter" aria-hidden="true" /><i className="fab fa-instagram" aria-hidden="true" /></div>
                                </div>
                                <div className="user__bio">
                                    <h3>Biography</h3>
                                    <h6>Front-end Developer</h6>
                                </div>
                                <div className="user__courses">
                                    <h3>Courses</h3>
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item"><a className="nav-link active show" data-toggle="tab" href="#menu1">My
                Choosen</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#menu2">My Courses</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#menu3">My Quizzes</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#menu4">My Orders</a></li>
                                    </ul>
                                    <div className="tab-content">
                                        <div id="menu1" className="container tab-pane active show"><br />
                                            <div className="product__items d-flex">
                                            {this.props.cartList.map((item,i)=>{
                                              return(
                                                   <InfoItem key={i} item={item}/>
                                              )  
                                            })}
                                           
                                        </div>
                                        <button className="showmore">SHOW MORE</button>
                                    </div>
                                    <div id="menu2" className="container tab-pane fade"><br />
                                        <div className="product__items d-flex justify-content-between">
                                            <div className="product__item">
                                                <div className="item__img"><img src="/img/item1.jpg" alt="item" />
                                                    <div className="img__overlay" />
                                                </div>
                                                <div className="item__info">
                                                    <h5>Complete Python Bootcamp: Go from zero to hero...</h5>
                                                    <h6>Jose Portilla</h6>
                                                    <div className="rating"><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star-half-alt" aria-hidden="true" /><i className="far fa-star" aria-hidden="true" />3.5 <span>(176,466)</span></div>
                                                    <div className="progress" style={{ height: 10 }}>
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{ width: '70%' }} />
                                                    </div><button>CONTINUE</button>
                                                    <div className="stated__day">Started June 11, 2019</div>
                                                </div>
                                            </div>
                                            <div className="product__item">
                                                <div className="item__img"><img src="/img/item2.jpg" alt="item" />
                                                    <div className="img__overlay" />
                                                </div>
                                                <div className="item__info">
                                                    <h5>Complete Python Bootcamp: Go from zero to hero...</h5>
                                                    <h6>Jose Portilla</h6>
                                                    <div className="rating"><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star-half-alt" aria-hidden="true" /><i className="far fa-star" aria-hidden="true" />3.5 <span>(176,466)</span></div>
                                                    <div className="progress" style={{ height: 10 }}>
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{ width: '70%' }} />
                                                    </div><button>CONTINUE</button>
                                                    <div className="stated__day">Started June 11, 2019</div>
                                                </div>
                                            </div>
                                            <div className="product__item">
                                                <div className="item__img"><img src="/img/item3.jpg" alt="item" />
                                                    <div className="img__overlay" />
                                                </div>
                                                <div className="item__info">
                                                    <h5>Complete Python Bootcamp: Go from zero to hero...</h5>
                                                    <h6>Jose Portilla</h6>
                                                    <div className="rating"><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star-half-alt" aria-hidden="true" /><i className="far fa-star" aria-hidden="true" />3.5 <span>(176,466)</span></div>
                                                    <div className="progress" style={{ height: 10 }}>
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" style={{ width: '70%' }} />
                                                    </div>
                                                    <button>CONTINUE</button>
                                                    <div className="stated__day">Started June 11, 2019</div>
                                                </div>
                                            </div>
                                        </div><button className="showmore">SHOW MORE</button>
                                    </div>
                                    <div id="menu3" className="container tab-pane fade"><br />
                                        <h3>My Quizzes</h3>
                                        <table className="table table-striped table__quiz">
                                            <thead>
                                                <tr>
                                                    <th>COURSE</th>
                                                    <th>QUIZ</th>
                                                    <th>STATUS</th>
                                                    <th />
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>How to be a DJ? Make Electronic Music</td>
                                                    <td>Final Middle Quiz</td>
                                                    <td>83%</td>
                                                    <td><span className="lnr lnr-checkmark-circle" /> Passed</td>
                                                </tr>
                                                <tr>
                                                    <td>How to be a DJ? Make Electronic Music</td>
                                                    <td>Final Middle Quiz</td>
                                                    <td>67%</td>
                                                    <td><span className="lnr lnr-cross" /> Failed</td>
                                                </tr>
                                                <tr>
                                                    <td>How to be a DJ? Make Electronic Music</td>
                                                    <td>Final Middle Quiz</td>
                                                    <td>75%</td>
                                                    <td><span className="lnr lnr-checkmark-circle" /> Passed</td>
                                                </tr>
                                                <tr>
                                                    <td>How to be a DJ? Make Electronic Music</td>
                                                    <td>Final Middle Quiz</td>
                                                    <td>33%</td>
                                                    <td><span className="lnr lnr-cross" /> Failed</td>
                                                </tr>
                                                <tr>
                                                    <td>How to be a DJ? Make Electronic Music</td>
                                                    <td>Final Middle Quiz</td>
                                                    <td>75%</td>
                                                    <td><span className="lnr lnr-checkmark-circle" /> Passed</td>
                                                </tr>
                                                <tr>
                                                    <td>How to be a DJ? Make Electronic Music</td>
                                                    <td>Final Middle Quiz</td>
                                                    <td>33%</td>
                                                    <td><span className="lnr lnr-cross" /> Failed</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div id="menu4" className="container tab-pane fade"><br />
                                        <h3>My Orders</h3>
                                        <div className="order">
                                            <div className="order__id">313915636810515d33e11bbbbf6</div>
                                            <div className="order__day">July 21, 2019 3:50 am</div>
                                            <div className="order__pending">Pending</div>
                                        </div>
                                        <div className="order">
                                            <div className="order__id">313915634021195d2f9f87df5f9</div>
                                            <div className="order__day">July 17, 2019 10:21 pm</div>
                                            <div className="order__success">Success</div>
                                        </div>
                                        <div className="order">
                                            <div className="order__id">313915636810515d33e11bbbbf6</div>
                                            <div className="order__day">July 21, 2019 3:50 am</div>
                                            <div className="order__pending">Pending</div>
                                        </div>
                                        <div className="order">
                                            <div className="order__id">313915634021195d2f9f87df5f9</div>
                                            <div className="order__day">July 17, 2019 10:21 pm</div>
                                            <div className="order__success">Success</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</>
        )
    }
}
const mapStateToProps = state => ({
    cartList: state.cart,
    userList:state.user.credentials
})
export default connect(mapStateToProps, null)(Info) 
