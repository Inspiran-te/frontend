import {  IInputsData, IInstitution } from "../../../types";

export type EducationDataProps = {
    handleInputChangeInstitutions: (event: React.ChangeEvent<HTMLInputElement>, index: number, field: keyof IInstitution) => void;
    index: number
    inputsData?: IInputsData
}