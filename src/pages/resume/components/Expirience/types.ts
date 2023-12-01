import { IInputsData } from "../../types";

export interface ExpirienceProps {
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	inputsData: IInputsData
}