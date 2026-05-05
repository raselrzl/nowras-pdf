"use client";

import { logoutAction } from "../utils/auth";


export default function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="px-3 py-1 border rounded-xs hover:bg-gray-50"
      >
        Logout
      </button>
    </form>
  );
}