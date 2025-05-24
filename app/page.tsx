import React from "react";
import UsersApp from "./components/UsersApp";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <UsersApp />
    </div>
  );
}
