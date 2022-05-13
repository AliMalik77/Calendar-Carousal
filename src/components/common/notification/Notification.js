import { notification } from "antd";

export const openNotification = (data) => {
  notification.open({
    description: data,
  });
};
