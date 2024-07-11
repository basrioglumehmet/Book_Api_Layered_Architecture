import useNotification from "@/utils/events/notification/useNotification";
import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/_layout_user/user/favorites")({
  component: () => <Favorites />,
});

type Props = {};

const Favorites = (props: Props) => {
  const { sendNotification } = useNotification();
  React.useEffect(() => {
    sendNotification("TEST");
  }, []);
  return <div>Favorilerin</div>;
};
