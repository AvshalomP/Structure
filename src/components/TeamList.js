import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
//components
import DepartmentItem from './DepartmentItem';


class TeamList extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const departments = this.props.departments.map( (department, idx) =>
                            <DepartmentItem key={idx} department={department}/>);
        return(
            <ScrollView>
                {departments}
            </ScrollView>
        )
    }
}

function mapStateToProps(state){
    return {
        team: state.projects[0].team,
        departments: state.departments
    }
}

export default connect(mapStateToProps, null)(TeamList);