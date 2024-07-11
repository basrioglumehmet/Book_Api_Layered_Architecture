import React, { useEffect } from "react";
import emitter from "@/utils/events/eventEmitter";

const NotificationListener = () => {
  useEffect(() => {
    const listener = emitter.addListener("notification", (notification) => {
      console.log(notification.message);
    });

    return () => {
      listener.remove();
    };
  }, []);

  return null;
};

export default NotificationListener;
