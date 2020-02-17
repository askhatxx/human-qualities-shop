import React from 'react';
import {connect} from 'react-redux';
import StatusLoading from '../components/StatusLoading';
import {IState} from '../interfaces';

type MainProps = {
    status: string
}

const Main: React.FC<MainProps> = ({status}) => {
    if (status !== 'STATUS_SUCCESS') {
        return <StatusLoading status={status}/>
    }

    return (
        <h1>Main Page</h1>
    );
}

const mapStateToProps = (state: IState) => {
    return {
        status: state.status
    }
}

export default connect(mapStateToProps)(Main);