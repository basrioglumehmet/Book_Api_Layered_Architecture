import emitter from "../eventEmitter";

const useNotification = () => {
  const sendNotification = (message) => {
    emitter.emit("notification", { message });
  };

  return { sendNotification };
};

export default useNotification;
