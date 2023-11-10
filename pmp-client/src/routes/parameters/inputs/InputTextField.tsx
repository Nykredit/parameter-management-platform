import { TextField } from "rmwc";
import { ParameterValue } from "../../../features/changes/types";

interface InputTextFieldProps {
	isValid: boolean;
	value: ParameterValue;
	onParamChange: (newValue: ParameterValue) => void;

}

const InputTextField = (props: InputTextFieldProps) => {
	const { isValid, value, onParamChange } = props;

	return (
		<TextField
			invalid={!isValid}
			// prefix={isValid ? "" : "type not " + parameter.type}
			outlined
			className={"parameterInput" + (isValid ? "" : " invalid")}
			value={value as string}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
				onParamChange(e.target.value)
			}}
		/>
	);
}

export default InputTextField;