import { Button } from 'rmwc';
import QueryExample from './QueryExample';
import useCurrentCommit from '../../features/changes/useCurrentCommit';

const ParametersPage = () => {
    const { addChange } = useCurrentCommit();

    const handleClick = () => {
        addChange({
            parameterKey: 'test',
            newValue: 'test',
            oldValue: 'test'
        });
    };

    return (
        <div>
            <h1>Parameters</h1>
            <Button raised>Add parameter change</Button>
            <QueryExample />
        </div>
    );
};

export default ParametersPage;
