"use client";
import { useFormStatus } from "react-dom";

export default function PostButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      type="submit"
    >
      Post
    </button>
  );
}
