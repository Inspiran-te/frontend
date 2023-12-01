import { IInputsData, IInstitution } from "../../types";

export interface EducationProps {
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	
	inputsData: IInputsData
	
}