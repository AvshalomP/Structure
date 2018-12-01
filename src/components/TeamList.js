import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
//components
import DepartmentItem from './DepartmentItem';


class TeamList extends Component {
    constructor(props){
        super(props);

        this.state = {
            info: this.initInfo(Object.getOwnPropertyNames(props.team).length)
        }
    }

    handleToggleDepartmentInfo = (idx) => {
        const info = [...this.state.info];
        info[idx] = !info[idx];
        this.setState({ info })
    };

    initInfo = (len) => {
        const info = [];
        while(len-->0)
            info.push(false);
        return info;
    };

    render(){
        const { team } = this.props;
        const departments = team.map( (department, idx) => {
                            const departmentName = Object.getOwnPropertyNames(department)[0];
                            return (<DepartmentItem key={idx} info={this.state.info[idx]} team={team[idx][departmentName]}
                                            name={departmentName.toUpperCase()}
                                            onToggle={this.handleToggleDepartmentInfo.bind(this, idx)} />)
                            });
        return(
            <ScrollView>
                {departments}
            </ScrollView>
        )
    }
}

function mapStateToProps(state){
    return {
        team: state.projects[state.currentProject].team,
    }
}

export default connect(mapStateToProps, null)(TeamList);