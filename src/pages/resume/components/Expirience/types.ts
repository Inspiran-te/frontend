import { Dispatch, SetStateAction } from "react";
import { ICompany, IInputsData } from "../../types";

export interface ExpirienceProps {
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	inputsData: IInputsData
	handleInputChangeCompany: (event: React.ChangeEvent<HTMLInputElement>, index: number, field: keyof ICompany) => void;
	// dataExpiriense: ICompany[]
	// setDataExpiriense:  Dispatch<SetStateAction<ICompany[]>>
	setInputsData:Dispatch<SetStateAction<IInputsData>>
}