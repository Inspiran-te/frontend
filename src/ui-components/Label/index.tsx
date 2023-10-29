import { FC } from "react";
import { ILabel } from "./types";
import { LabelWrapper } from "./styles";

const Label: FC<ILabel> = ({ text, marginBottom, marginTop, fontSize, fontBold }) => (
    <LabelWrapper marginBottom={marginBottom} 
    marginTop={marginTop}
    fontSize={fontSize}
    fontBold={fontBold}>
        {text}
    </LabelWrapper>
);

export default Label;