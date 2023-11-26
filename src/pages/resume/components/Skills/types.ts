import { IInputsData } from "../../types";

export interface SkillsProps {
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	inputsData: IInputsData
}