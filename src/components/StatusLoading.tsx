import React from 'react';

type StatusLoadingProps = {
    status: string
}

const StatusLoading: React.FC<StatusLoadingProps> = ({status}) => {
    if (status === 'STATUS_ERROR') {
        return (
            <h1>Error</h1>
        );
    }

    if (status === 'STATUS_LOADING') {
        return (
            <div className="spinner">
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        );
    }

    return (
        <h1>Something went wrong</h1>
    );
}

export default StatusLoading;