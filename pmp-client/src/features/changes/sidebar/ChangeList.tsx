import { isParameterChange, isRevert } from '../../../utils/predicates/change';

import useCommitStore from '../useCommitStore';

/**
 * Displays a list of changes made in the current commit.
 */
const ChangeList = () => {
    const changes = useCommitStore((s) => s.changes);

    return (
        <div>
            <div>
                {changes.filter(isParameterChange).map((change) => (
                    <div key={change.parameterKey} className='bg-gray-500'>
                        <p>{change.parameterKey}</p>
                        <br />
                        <p>{change.newValue.toString()}</p>
                    </div>
                ))}
            </div>
            <div className='h-2'></div>
            <div>
                {changes.filter(isRevert).map((change) => (
                    <div key={change.commitReference} className='bg-gray-500'>
                        <p>{change.commitReference}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChangeList;
