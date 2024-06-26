"use client";
import { signIn } from "next-auth/react";

export default function SignInButton() {
  const handleSignIn = async () => {
    try {
      await signIn("github", {
        callbackUrl: "http://localhost:5173/",
      });
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <button
      style={{
        color: "black",
        fontFamily: "'Roboto', Arial, sans-serif",
        fontWeight: "bold",
        backgroundColor: "#e5dfdf",
        border: "2px solid #050a0e",
        borderRadius: "10px",
        padding: "6px 15px",
        cursor: "pointer",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s, transform 0.3s",
      }}
      onClick={handleSignIn}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0e793")} // Slightly darker pastel teal on hover
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#e5dfdf")}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      Logga in
    </button>
  );
}
