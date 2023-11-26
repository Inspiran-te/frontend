import { IInputsData } from "../../types";

export interface SummeryProps {
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	inputsData: IInputsData
}