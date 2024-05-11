import { colorsDef } from "../../config/Theme";

interface PageLabelProps {
  label: string;
  style?: React.CSSProperties;
}
const PageLabel = ({ label, style }: PageLabelProps) => {
  return (
    <>
      <p style={{ color: colorsDef.primary, fontSize: "2.5em", ...style }}>
        {label}
      </p>
    </>
  );
};

export default PageLabel;
