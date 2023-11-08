
export interface Parameter<T> {
	id: string;
	name: string;
	type: string;
	value: T;
}

export interface ParameterResponse {
	parameters: Parameter<unknown>[];
}


export enum SortingOption {
	Type = 'type',
	Name = 'name',
	Value = 'value',
}