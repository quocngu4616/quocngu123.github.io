import React, { Component } from 'react'
import { SEARCH_COURSES } from '../Redux/Action/type';
import { connect } from 'react-redux'
import SearchBar from '../Components/Search/SearchBar';
import SearchItem from '../Components/Search/SearchItem';
import { createAction } from '../Redux/Action';

export default class SearchCouse extends Component {



    // hàm maping và filter searchItem
    showSearchItem = (course, searchKeyWord) => {
        let result = null;
        if (course.length > 0) {
            if (searchKeyWord.length > 0 && searchKeyWord.length !== '') {
                course = course.filter(course => course.tenKhoaHoc.toLowerCase().indexOf(searchKeyWord.toLowerCase().trim()) !== -1)
                result = course.map((course, i) => <SearchItem course={course} key={i} />)
            }
        }
        return result;
    }
    render() {
        let { allCourse, history } = this.props
    
        return (
            <SearchBar handleSearch={this.props.handleSearch} history={history} searchKeyword={this.props.display}>
                {/* {this.showSearchItem(allCourse, this.props.display)} */}
            </SearchBar>
        )
    }
}
const mapStateToProps = state => ({
    allCourse: state.course.courses,
    display: state.displaySearch.searchKeyword
});

const mapDispatchToProps = dispatch => {
    return {
        handleSearch: keyword => {
            dispatch(createAction(SEARCH_COURSES, keyword));
        }
    };
};
connect(mapStateToProps, mapDispatchToProps)(SearchCouse)