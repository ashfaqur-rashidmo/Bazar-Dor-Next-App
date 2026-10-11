"use client";

export default function CurrentDate() {
  return (
    <span>
      {new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
        timeZone: "Asia/Dhaka",
      })}
    </span>
  );
}