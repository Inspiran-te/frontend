import { FC } from "react";
import { defaultComponentStyles } from "./styles";
import { ITitleInSection as Props } from "./types";

const { TitleSectionWrapper, TitleText } = defaultComponentStyles;

const TitleInSection: FC<Props> = ({ title, ...props}) => (
    <TitleSectionWrapper {...props}>
        <TitleText {...props}>
        {title}
        </TitleText>
    </TitleSectionWrapper>
);

export default TitleInSection;