import { DataTable, DataTableBody, DataTableContent, DataTableHead, DataTableHeadCell, DataTableRow } from "rmwc";
import { Parameter } from "./types";
import ParameterListRow from "./ParameterListRow";

interface ParameterListProps {
	parameters: Parameter<unknown>[];
	onEdit: (parameter: Parameter<unknown>) => void;
}

const ParameterList = (props: ParameterListProps) => {
	const { parameters, onEdit } = props;

	return (
		<DataTable className="parameterTable">
			<DataTableContent>
				<DataTableHead>
					<DataTableRow>
						<DataTableHeadCell>Name</DataTableHeadCell>
						<DataTableHeadCell>Type</DataTableHeadCell>
						<DataTableHeadCell>Value</DataTableHeadCell>
					</DataTableRow>
				</DataTableHead>
				<DataTableBody>
					{parameters.map((parameter) => (
						<ParameterListRow parameter={parameter}/>
					))}
				</DataTableBody>
			</DataTableContent>
		</DataTable>

	);
};

export default ParameterList;