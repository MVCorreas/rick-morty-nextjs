import React from "react";
import Spinner from "./Spinner";

export default function Button({
  text,
  onClick,
  variant = "primary",
  size = "small",
  isLoading = false,
  disabled = false,
}) {
  const sizeClasses =
    size === "big"
      ? "w-full min-h-[56px] py-2 text-lg"
      : "min-h-12 px-6 py-3 text-base";

  const variantClasses =
    variant === "primary"
      ? "border border-primary bg-transparent text-primary hover:bg-secondary hover:text-white"
      : "bg-secondary text-white hover:bg-transparent hover:text-primary hover:border hover:border-primary";

  const disabledClasses =
    disabled || isLoading
      ? "opacity-50 cursor-not-allowed pointer-events-none"
      : "";

  const baseClasses =
    "focus:outline-none rounded-lg font-medium transition-colors duration-200";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${disabledClasses}`}
      disabled={disabled || isLoading}
      data-test="button"
    >
      <div className="flex items-center justify-center gap-2">
        {isLoading && <Spinner size="sm" color="blue" />}
        <span>{text}</span>
      </div>
    </button>
  );
}
