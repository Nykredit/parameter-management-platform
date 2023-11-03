import { isParameterChange, isRevert } from '../../../types/predicates/change';

import useCurrentCommit from '../useCurrentCommit';

const ChangeList = () => {
    const { changes } = useCurrentCommit();

    return (
        <div>
            <div>
                {changes.filter(isParameterChange).map((change) => (
                    <div key={change.parameterKey} className='bg-gray-500'>
                        <p></p>
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
