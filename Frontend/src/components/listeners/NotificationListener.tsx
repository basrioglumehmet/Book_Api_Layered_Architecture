import React, { useEffect, useRef } from "react";
import emitter from "@/utils/events/eventEmitter";
import { BsHandThumbsUpFill } from "react-icons/bs";

export type NotificationType = {
  id: number;
  header: string;
  content: string;
  type: "success" | "error";
};

const NotificationListener = () => {
  const [notificationList, setNotificationList] = React.useState<NotificationType[]>([]);
  const timersRef = useRef<{ [key: number]: NodeJS.Timeout }>({});

  useEffect(() => {
    const listener = emitter.addListener("notification", (notification: Omit<NotificationType, 'id'>) => {
      const id = Date.now();
      setNotificationList((prevList) => {
        const newList = [
          ...prevList,
          {
            ...notification,
            id
          },
        ];

        if (newList.length > 5) {
          const oldestNotification = newList.shift();
          if (oldestNotification) {
            clearTimeout(timersRef.current[oldestNotification.id]);
            delete timersRef.current[oldestNotification.id];
          }
        }

        timersRef.current[id] = setTimeout(() => {
          setNotificationList((prevList) => {
            const updatedList = prevList.filter((n) => n.id !== id);
            delete timersRef.current[id];
            return updatedList;
          });
        }, 5000);

        return newList;
      });
    });

    return () => {
      listener.remove();
      Object.values(timersRef.current).forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="fixed top-5 right-5 z-10 gap-2 flex flex-col">
      {notificationList.map((n) => (
        <div key={n.id} className="bg-lightgreen flex items-center w-80 h-20 rounded-md overflow-hidden space-x-5">
          <div className="w-2 h-full bg-green"></div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green text-white">
            <BsHandThumbsUpFill />
          </div>
          <div className="flex flex-col text-sm">
            <span className="font-semibold">{n.header}</span>
            <span>{n.content}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationListener;
