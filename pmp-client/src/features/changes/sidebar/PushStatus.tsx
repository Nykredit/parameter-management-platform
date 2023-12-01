import { Dialog, DialogActions, DialogButton, DialogContent, DialogTitle } from 'rmwc';
import usePushCommit from './usePushCommit';
import useCommitStore from '../useCommitStore';
import { CommitBody } from '../types';

interface PushStatusProps {
    open: boolean;
    onClose?: () => void;
    commit: CommitBody;
}

const PushStatus = ({ open, onClose, commit }: PushStatusProps) => {
    // TODO: Missing implementation: usePushCommit currently only returns true.
    // It should check whether the push can get done or not.
    // Also actual backend implementation is missing to change params on services.
    // Finally, the parameters are currently just reverted back to their original values.
    const { requestState } = usePushCommit(commit);
    const clearChanges = useCommitStore((s) => s.clear);

    if (requestState === "loading") {
        return (
                <Dialog open={open}>
                    <DialogTitle>Pushing commit</DialogTitle>
                    <DialogContent><Load
                </Dialog>
        );
    } else {
        return (
            <>
                <Dialog open={open} onClose={onClose} onOpen={clearChanges}>
                    <DialogTitle>Changes pushed succesfully</DialogTitle>
                    <DialogActions>
                        <DialogButton danger outlined action='accept'>
                            OK
                        </DialogButton>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
};

export default PushStatus;
