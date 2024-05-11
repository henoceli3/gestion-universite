interface InputLabelProps {
  label: string;
  obligatoire?: boolean;
}
const InputLabel = ({ label, obligatoire }: InputLabelProps) => {
  return (
    <>
      <p style={{ marginBottom: "0.5em", fontWeight: "bold" }}>
        {label} <span style={{ color: "red" }}>{obligatoire ? "*" : ""}</span> :
      </p>
    </>
  );
};

export default InputLabel;
