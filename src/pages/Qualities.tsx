import React from 'react';
import {RouteComponentProps} from 'react-router-dom';

type OtherProps = RouteComponentProps<{
    id: string;
}>;

const Qualities: React.FC<OtherProps> = ({match}) => {
    console.log(match.params);
    //let topicId: {id?: string} = useParams();
    //console.log(topicId.id);
    return (
        <h1>Qualities Page</h1>
    );
}

export default Qualities;