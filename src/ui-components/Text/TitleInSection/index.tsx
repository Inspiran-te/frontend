import { FC } from "react";
import { defaultComponentStyles } from "./styles";
import { ITitleInSection as Props } from "./types";

const { TitleSectionWrapper, TitleText } = defaultComponentStyles;

const TitleInSection: FC<Props> = ({ title, marginBottom,  marginTop, color, fontSize, width}) => (
    <TitleSectionWrapper marginBottom={marginBottom} marginTop={marginTop} width={width}>
        <TitleText color={color} fontSize={fontSize}>
        {title}
        </TitleText>
    </TitleSectionWrapper>
);

export default TitleInSection;