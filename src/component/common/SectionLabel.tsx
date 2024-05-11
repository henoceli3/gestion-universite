import { Fade } from "react-awesome-reveal";
import { colorsDef } from "../../config/Theme";

interface PageLabelProps {
  label: string;
}
const SectionLabel = ({ label }: PageLabelProps) => {
  return (
    <Fade direction="left" triggerOnce={true} duration={2000}>
      <p
        style={{ color: colorsDef.primary, fontSize: "2.5em" }}
        className="great-vibes-regular"
      >
        {label}
      </p>
    </Fade>
  );
};

export default SectionLabel;
