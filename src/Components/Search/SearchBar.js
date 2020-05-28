import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: this.props.searchKeyword
        }
    }

    // hàm gắn keyword ccho state
    onChange = e => {
        this.setState({
            keyword: e.target.value
        }, () => {
            this.props.handleSearch(this.state.keyword)
        })
    }
    //hàm kích hoạt dispatch và chuyển trang
    onSubmit = e => {
        e.preventDefault();

        this.props.handleSearch(this.state.keyword);

        this.props.history.push("/detail");
        
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Tìm Kiếm Khóa Học"
                        onChange={this.onChange}
                        value={this.state.keyword}
                    />
                    <div className="search__result">
                        <div className="search__form">
                            {this.props.children}
                        </div>
                    </div>
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-search" /></span>
                    </div>
                </div>
            </form>
        )
    }
}
