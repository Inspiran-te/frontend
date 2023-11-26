import { IInputsData } from "../../types";

export interface ContactsProps {
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	inputsData: IInputsData
}