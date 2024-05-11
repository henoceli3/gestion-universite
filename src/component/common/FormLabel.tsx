import { Fragment } from "react";

const FormLabel = ({
  label,
  subLabel,
  required,
}: {
  label: string;
  subLabel?: string;
  required?: boolean;
}) => {
  return (
    <Fragment>
      <div className="d-flex align-items-center">
        <h4
          style={{
            fontFamily: "Oswald, sans-serif",
          }}
        >
          {label}
        </h4>
        {subLabel && (
          <p style={{ marginTop: "-10px", marginBottom: 0 }}>{subLabel}</p>
        )}
        {required && <span className="ms-3 text-danger fw-bolder">*</span>}
      </div>
    </Fragment>
  );
};

export default FormLabel;
