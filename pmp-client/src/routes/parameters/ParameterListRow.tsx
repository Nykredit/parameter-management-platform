import { Button, DataTableCell, DataTableHeadCell, DataTableRow, TextField } from "rmwc";
import "./style.css"
import { useRef } from "react";
import { Parameter } from "../../features/parameters/types";
import useCommitStore from "../../features/changes/useCommitStore";
import { Service } from "../../features/services/types";
import { ParameterValue } from "../../features/changes/types";



interface ParameterListRowProps {
	parameter: Parameter;
	service: Service;
}

const ParameterListRow = (props: ParameterListRowProps) => {
	const { parameter, service } = props;
	const addParameterChange = useCommitStore((s) => s.addParameterChange);
	const removeParameterChange = useCommitStore((s) => s.removeParameterChange);

	const parameterChange = useCommitStore((s) => s.findParameterChange(service, parameter));
	const hasChange = parameterChange !== undefined;
	const value = hasChange ? parameterChange.newValue : parameter.value;

	const handleParamerterChangeReset = () => {
		removeParameterChange(service, parameterChange!);
		console.log(parameterChange)
	};

	const handleParameterChange = (newValue: ParameterValue) => {
		addParameterChange(service, {parameter, newValue});
	};


	return (
		<DataTableRow className="tableRow">
			<DataTableCell>{parameter.name}</DataTableCell>
			<DataTableCell>{parameter.type}</DataTableCell>
			<DataTableCell>
				<TextField
					outlined
					className="parameterInput"
					value={value as string}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						handleParameterChange(e.target.value)}} />
				{/* <TextField className="parameterInput" outlined /> */}
			</DataTableCell>
			<DataTableCell alignEnd>
				<Button
					className={!hasChange ? "hidden" : ""}
					outlined icon="restart_alt"
					label="reset"
					onClick={handleParamerterChangeReset}
				/>
			</DataTableCell>
		</DataTableRow>
	);
}

export default ParameterListRow;