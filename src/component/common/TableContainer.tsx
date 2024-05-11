interface TableContainerProps {
  children: React.ReactNode;
  marginBottom?: string;
}
const TableContainer = ({ children, marginBottom }: TableContainerProps) => {
  return (
    <>
      <div
        style={{
          padding: "10px 10px",
          background: "#fff",
          boxShadow: "0px 0px 25px #00000020",
          borderRadius: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: marginBottom || "20em",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default TableContainer;
