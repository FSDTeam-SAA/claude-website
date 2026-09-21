import Image from "next/image";
import { Activity } from "lucide-react";

type LoaderVariant = "page" | "section" | "inline";

interface LoaderProps {
  variant?: LoaderVariant;
  message?: string;
  className?: string;
}

const variantClasses: Record<LoaderVariant, string> = {
  page: "fixed inset-0 z-[100] min-h-screen bg-white/95 backdrop-blur-sm",
  section: "min-h-[360px] w-full bg-white",
  inline: "min-h-40 w-full bg-transparent",
};

const Loader = ({
  variant = "page",
  message = "Loading the latest soccer data...",
  className = "",
}: LoaderProps) => {
  const isCompact = variant === "inline";

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={`relative flex items-center justify-center overflow-hidden ${variantClasses[variant]} ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,230,7,0.09),_transparent_55%)]"
      />

      <div
        className={`relative flex flex-col items-center px-6 text-center ${isCompact ? "gap-3" : "gap-5"}`}
      >
        {!isCompact && (
          <Image
            src="/assets/images/logo.jpg"
            alt="Analytic Soccer"
            width={202}
            height={56}
            priority={variant === "page"}
            className="h-12 w-[180px] object-cover sm:h-14 sm:w-[202px]"
          />
        )}

        <div
          className={`relative flex items-center justify-center ${isCompact ? "h-16 w-16" : "h-24 w-24"}`}
          aria-hidden="true"
        >
          <div className="absolute inset-0 rounded-full border border-primary/20" />
          <div className="absolute inset-1 animate-[spin_1.4s_linear_infinite] rounded-full border-2 border-transparent border-r-primary border-t-primary motion-reduce:animate-none" />
          <div className="absolute inset-3 animate-pulse rounded-full bg-primary/10 motion-reduce:animate-none" />
          <div
            className={`relative flex items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgba(16,230,7,0.18)] ${isCompact ? "h-10 w-10" : "h-14 w-14"}`}
          >
            <Activity
              className={`text-primary ${isCompact ? "h-5 w-5" : "h-7 w-7"}`}
            />
          </div>

          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_12px_rgba(16,230,7,0.75)]" />
        </div>

        <div className="space-y-2">
          <p
            className={`${isCompact ? "text-sm" : "text-base sm:text-lg"} font-semibold text-[#131313]`}
          >
            {message}
          </p>
          {!isCompact && (
            <div
              className="flex items-center justify-center gap-1.5"
              aria-hidden="true"
            >
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.3s] motion-reduce:animate-none" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.15s] motion-reduce:animate-none" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary motion-reduce:animate-none" />
            </div>
          )}
        </div>

        <span className="sr-only">Please wait while the content loads.</span>
      </div>
    </div>
  );
};

export default Loader;
