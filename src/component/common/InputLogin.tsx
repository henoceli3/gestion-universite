import { Input } from "antd";

interface InputLoginProps {
  placeholder: string;
  callback: () => void;
}

const InputLogin = ({ placeholder, callback }: InputLoginProps) => {
  return (
    <>
      <Input
        onChange={() => {
          callback();
        }}
        placeholder={placeholder}
        className="login-Input"
        width={"100%"}
        style={{
          background: "transparent",
          marginBottom: "1em",
          height: "3em",
        }}
      />
    </>
  );
};

export default InputLogin;
