import React, { Component } from 'react'
import { connect } from 'react-redux'
import { notify } from '../../Services/notify/Notify'
import { Link } from 'react-router-dom'
class DetailCourse extends Component {
    //btn go to car
    constructor(props) {
        super(props);
        this.state = {
            changeBtnCart: false
        }
    }
    changeCart = (item) => {
        this.props.addToCart(item);
        this.setState({
            changeBtnCart: true
        })
    }
    render() {
        return (
            <section className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="content_detaiItem">
                            <h3>{this.props.courseDetail.tenKhoaHoc}</h3>
                            <div className="content_mainInfo d-flex">
                                <div className="item__teacher">
                                    <img src="../img/face5.jfif" alt="không hiển thị ảnh" />
                                    <p className="first">Giảng Viên</p>
                                    <p className="second">{this.props.courseDetail.nguoiTao.hoTen}</p>
                                </div>
                                <div className="item__category">
                                    <i className="fa fa-bookmark" />
                                    <p className="first">Danh Mục</p>
                                    <p className="second">{this.props.courseDetail.moTa}</p>
                                </div>
                                {/* <div className="item__rating">
                                <div className="ratingStart">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-half-o" />
                                </div>
                            </div> */}
                            </div>
                        </div>
                        <div className="content__item">
                            <div className="section__header">
                                <div>SECTION 1: INTRODUCTION<span>Preview</span></div>
                            </div>
                            <div className="content__entry">
                                <div className="gap" />
                                <div className="lessons">
                                    <div className="lessons__header">
                                        <div>Lessons</div>
                                        <ul>
                                            <li><i className="fa fa-play-circle" /> How to obtain your
        Certificate of Completion for this course<span><i className="fa fa-clock" />
                                                15:32</span></li>
                                            <li><i className="fa fa-play-circle" /> Working Files – Download
        These First<span><i className="fa fa-clock" /> 14:24</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content__item">
                            <div className="section__header">
                                <div>SECTION 2: WORKSPACE AND PREFERENCES<span>Preview</span></div>
                            </div>
                            <div className="content__entry">
                                <div className="gap" />
                                <div className="lessons">
                                    <div className="lessons__header">
                                        <div>Lessons</div>
                                        <ul>
                                            <li><i className="fa fa-play-circle" /> Get In Total Control Of The Control
        Panel<span><i className="fa fa-clock" />
                                                15:32</span></li>
                                            <li><i className="fa fa-play-circle" /> The Magic Of Auto Recovery<span><i className="fa fa-clock" /> 14:24</span>
                                            </li>
                                            <li><i className="fa fa-play-circle" /> Customize The Workspace<span><i className="fa fa-clock" /> 14:24</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content__item">
                            <div className="section__header">
                                <div>SECTION 3: LAYOUT<span>Preview</span></div>
                            </div>
                            <div className="content__entry">
                                <div className="gap" />
                                <div className="lessons">
                                    <div className="lessons__header">
                                        <div>Lessons</div>
                                        <ul>
                                            <li><i className="fa fa-play-circle" /> Outside-The-Box Thinking With Grids<span><i className="fa fa-clock" />
                                            15:32</span></li>
                                            <li><i className="fa fa-play-circle" /> The Magic Of Auto Recovery<span><i className="fa fa-clock" /> 14:24</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="sidebar__info">
                            <div className="info__img"><img src={this.props.courseDetail.hinhAnh} alt="item" /></div>
                            <div className="info__inner">
                                <div className="wishlist">
                                    {/* <div class="add__list">
              <div class="heart"><i class="lnr lnr-heart"></i></div><span>Add to Wishlist</span>
          </div> */}
                                    <p className="text-center text-uppercase font-weight-bold">{this.props.courseDetail.tenKhoaHoc}</p>
                                    <span className="price">$19.99</span>
                                </div>
                                {this.state.changeBtnCart
                                    ?
                                    <Link to="./detailcart">
                                        <button className="add__cart btn btn--btn_blue" style={{ backgroundColor: "yellow" }}>XEM GIỎ HANG</button>
                                    </Link>
                                    : <button className="add__cart btn btn--red" onClick={() => this.changeCart(this.props.courseDetail)}>THÊM GIỎ HÀNG</button>
                                }
                                {/* <button className="add btn btn--red" onClick={() => this.changeCart(this.props.courseDetail)}>THÊM GIỎ HÀNG</button> */}
                                <ul className="meta">
                                    <li>
                                        <div>Enrolled: <span> 3 students</span></div>
                                    </li>
                                    <li>
                                        <div>Duration: <span> 6 hours</span></div>
                                    </li>
                                    <li>
                                        <div>Lectures: <span> 6</span></div>
                                    </li>
                                    <li>
                                        <div>Video: <span> 3 hours</span></div>
                                    </li>
                                    <li>
                                        <div>Level: <span> 3 Beginner</span></div><i className="lnr lnr-sort-amount-asc" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    courseDetail: state.course.couseDetail || {
        //couserDetail lânf đầu load lên màn hình sẽ trống nên cần đưa thông tinh cần show ra màn hình vô đây
        maKhoaHoc: '',
        tenKhoaHoc: '',
        hinhAnh: '',
        luotXem: '',
        moTa: '',
        nguoiTao: {
            hoTen: '',
        }
    },
    // cartList: state.cart

})
const mapDispatchToProps = dispatch => {
    return {
        addToCart: item => {
            const itemCourse = {
                maKhoaHoc: item.maKhoaHoc,
                tenKhoaHoc: item.tenKhoaHoc,
                hinhAnh: item.hinhAnh,
                moTa: item.moTa,
                giaBan: 19.90,

                // soLuong:1
            }
            const action = {
                type: "ADD_TO_CART",
                itemCourse
            }
            dispatch(action);
            notify('', 'THÊM THÀNH CÔNG')

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailCourse)