import { Button, DataTableCell, DataTableHeadCell, DataTableRow, TextField } from "rmwc";
import { Parameter } from "./types";
import "./style.css"

interface ParameterListRowProps {
	parameter: Parameter<unknown>;
}

const ParameterListRow = (props: ParameterListRowProps) => {
	const { parameter } = props;

	const change = Math.random() > 0.5 ? false : true;


	const handleParamerterChangeReset = () => {};

	return (
		<DataTableRow>
			<DataTableCell>{parameter.name}</DataTableCell>
			<DataTableCell>{parameter.type}</DataTableCell>
			<DataTableCell>
				<TextField className="parameterInput" outlined value={parameter.value as string | number} />
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