import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout_user/user/user")({
  component: () => <div>Hello /_layout_user/user!</div>,
});
