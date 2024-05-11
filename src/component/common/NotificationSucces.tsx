import { notification } from "antd";
import { colorsDef } from "../../config/Theme";
const NotificationSucces = (message: string, description?: string) => {
  return notification.success({
    message: message,
    description: description,
    style: { backgroundColor: colorsDef.secondary, color: "white" },
  });
};

export default NotificationSucces;
