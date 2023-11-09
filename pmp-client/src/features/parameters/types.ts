import { ParameterValue } from "../changes/types";

export interface Parameter<T extends ParameterValue = ParameterValue> {
    id: string;
    name: string;
    type: string;
    value: T;
}

export interface ParameterResponse {
    parameters: Parameter[];
}
