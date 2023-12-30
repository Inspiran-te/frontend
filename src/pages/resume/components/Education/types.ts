import { IInputsData, IInstitution } from "../../types";

export interface EducationProps {
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleInputChangeInstitutions: (event: React.ChangeEvent<HTMLInputElement>, index: number, field: keyof IInstitution) => void;
	inputsData: IInputsData
}