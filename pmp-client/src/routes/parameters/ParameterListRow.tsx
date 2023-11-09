import { Button, DataTableCell, DataTableHeadCell, DataTableRow, TextField } from "rmwc";
import { Parameter } from "./types";
import "./style.css"

interface ParameterListRowProps {
	parameter: Parameter<unknown>;
	onParamChange: (parameter: Parameter<unknown>) => void;
}

const ParameterListRow = (props: ParameterListRowProps) => {
	const { parameter, onParamChange } = props;

	const change = Math.random() > 0.5 ? false : true;


	const handleParamerterChangeReset = () => { };

	return (
		<DataTableRow className="tableRow">
			<DataTableCell>{parameter.name}</DataTableCell>
			<DataTableCell>{parameter.type}</DataTableCell>
			<DataTableCell>
				<TextField
					outlined
					className="parameterInput"
					value={parameter.value as string | number}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						onParamChange({
							...parameter,
							value: e.target.value,
						});
					}} />
				{/* <TextField className="parameterInput" outlined /> */}
			</DataTableCell>
			<DataTableCell alignEnd>
				<Button
					className={change ? "hidden" : ""}
					outlined icon="restart_alt"
					label="reset"
					onClick={handleParamerterChangeReset}
				/>
			</DataTableCell>
		</DataTableRow>
	);
}

export default ParameterListRow;