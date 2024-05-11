import { notification } from "antd";
// import { colorsDef } from "../../config/Theme";

const NotificationError = (message: string, description?: string) => {
  return notification.error({
    message: message,
    description: description,
    placement: "bottomLeft",
    // style: { background: colorsDef.primary, color: "#fff" },
  });
};

export default NotificationError;
