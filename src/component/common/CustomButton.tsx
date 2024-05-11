import { Button } from "antd";
interface CustomButtomProps {
  label: string;
  callback: () => void;
  style?: React.CSSProperties;
}
const CustomButtom = ({ label, callback, style }: CustomButtomProps) => {
  return (
    <>
      <Button onClick={callback} type="primary" style={style}>
        {label}
      </Button>
    </>
  );
};

export default CustomButtom;
