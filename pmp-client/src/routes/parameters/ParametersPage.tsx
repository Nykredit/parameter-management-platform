import { Button } from 'rmwc';
import QueryExample from './QueryExample';
import useCurrentCommit from '../../features/changes/useCurrentCommit';

const ParametersPage = () => {
    const { addChange } = useCurrentCommit();

    const handleClick = () => {
        const now = Date.now();
        addChange({
            parameterKey: now.toString(),
            newValue: `test-${now}`,
            oldValue: 'test'
        });
    };

    return (
        <div>
            <h1>Parameters</h1>
            <Button raised onClick={handleClick}>
                Add parameter change
            </Button>
            <QueryExample />
        </div>
    );
};

export default ParametersPage;
