import { useRouter } from "next/router";
import React from "react";
import { Login } from "@/components/Admin/login";
import { Register } from "@/components/Admin/register";

const Admin = () => {
  const router = useRouter();
  const { param } = router.query;

  const route = () => {
    switch (true) {
      case param === "login":
        return <Login />;
      case param === "register":
        return <Register />;
      default:
        return null;
    }
  };
  return <>{route()}</>;
};

export default Admin;
