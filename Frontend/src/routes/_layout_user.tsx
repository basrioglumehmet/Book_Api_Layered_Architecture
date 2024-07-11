import UserProfileCard from "@/components/UserProfileCard";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout_user")({
  component: () => (
    <div className="container flex gap-5">
      <UserProfileCard />
      <div className=" flex-1">
        <Outlet />
      </div>
    </div>
  ),
});
