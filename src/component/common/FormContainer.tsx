interface FormContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}
const FormContainer = ({ children, style }: FormContainerProps) => {
  return (
    <>
      <div
        style={{
          padding: "10px 10px",
          background: "#fff",
          boxShadow: "0px 0px 25px #00000020",
          marginTop: "30px",
          borderRadius: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          ...style,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default FormContainer;
