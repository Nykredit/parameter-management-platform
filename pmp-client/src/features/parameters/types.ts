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

export enum ParameterType {
	STRING = 'string',
	CHARACTER = 'character',
	INTEGER = 'integer',
	LONG = 'long',
	SHORT = 'short',
	BYTE = 'byte',
	FLOAT = 'float',
	DOUBLE = 'double',
	BIGDECIMAL = 'bigdecimal',
	BOOLEAN = 'boolean',
	LOCALDATE = 'localdate',
	LOCALDATETIME = 'localdatetime',
}