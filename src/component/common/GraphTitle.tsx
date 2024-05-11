import { colorsDef } from "../../config/Theme";

interface PageLabelProps {
  label: string;
  style?: React.CSSProperties;
}
const GraphTiles = ({ label, style }: PageLabelProps) => {
  return (
    <>
      <p style={{ color: colorsDef.primary, fontSize: "1.5em", ...style }}>
        {label}
      </p>
    </>
  );
};

export default GraphTiles;
