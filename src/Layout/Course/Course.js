import React, { Component } from 'react'
// import ProlductItems from '../../Containers/ProlductItems'
import Category from '../../Components/Categories/Category'
import CourseCategory from '../../Components/Categories/CourseCategory'
import {Link} from 'react-router-dom'
export default class Course extends Component {

    render() {
        return (
            
                <section className="popular">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 popular__content">
                        {/* CATEGORY */}
                                <Category/>
                                <div className="tab-content">
                                <CourseCategory/>
                               <button className="btn btn--btn_red-1 ml-5"> <Link to="./detail" className="link">View More...</Link></button> 
                                </div>
                            </div>,
                        </div>
                    </div>
                </section>
            
        )
    }
}
