import React, { Component } from 'react'
import Header from '../Layout/Header/Header'
import Content from '../Layout/SessionContent/Content'
import Footer from '../Layout/Footer/Footer'

export default class Detail extends Component {
    render() {
        return (
            <>

                {/* HEADER */}
                <Header history={this.props.history} />

                {/* SESSION CONTENT */}
                <Content />
                {/* FOOTER */}
                <Footer />

            </>
        )
    }
}
