import { Dispatch, SetStateAction } from "react";
import { ICompany, IInputsData } from "../../../types";

export type ExpirienceDataProps = {
    handleInputChangeCompany: (event: React.ChangeEvent<HTMLInputElement>, index: number, field: keyof ICompany) => void;
    index: number
    inputsData?: IInputsData
}