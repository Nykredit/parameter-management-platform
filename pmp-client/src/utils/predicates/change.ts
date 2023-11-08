import { Change, ParameterChange, ParameterValue, Revert } from '../../features/changes/commitStore';

/**
 * Checks if the given change is a revert.
 * @param change the change to check.
 * @returns True if the change is a Revert object.
 */
export const isRevert = (change: Change): change is Revert => {
    return (change as Revert).commitReference !== undefined;
};

/**
 * Checks if the given change is a parameter change.
 * @param change the change to check.
 * @returns True if the change is a ParameterChange object.
 */
export const isParameterChange = <T extends ParameterValue>(change: Change<T>): change is ParameterChange<T> => {
    return (change as ParameterChange<T>).parameterKey !== undefined;
};
