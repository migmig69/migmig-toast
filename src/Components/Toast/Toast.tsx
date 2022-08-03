import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { ToastProps } from "./type";
import { useToast } from "./useToast";
import {
  animationVariables,
  closeButtonClasses,
  closeIcon,
  getIcon,
  iconClasses,
  wrapperClasses,
} from "./utils";

export const Toast = (props: ToastProps) => {
  let {
    type = "info",
    icon = "",
    message = "---",
    id,
    duration = 3000,
  } = props;
  icon = icon === "" ? getIcon(type) : icon;
  duration = typeof duration === "string" ? +duration : duration;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const { remove, position } = useToast();

  //auto dismiss
  const dismissRef = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => {
    if (duration) {
      dismissRef.current = setTimeout(() => {
        remove(id, wrapperRef);
      }, duration);
    }

    return () => {
      clearTimeout(dismissRef.current);
    };
  }, []);

  // progressBar
  const progressBarRef = useRef<ReturnType<typeof setInterval>>();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const complete = 100;

    if (duration) {
      progressBarRef.current = setInterval(() => {
        if (progress < complete) {
          setProgress((prev) => prev + 1);
        } else {
          return;
        }
      }, duration / complete);
    }

    return () => {
      clearInterval(progressBarRef.current);
    };
  }, []);
  return (
    <div
      style={{ ["--elm-translate" as any]: animationVariables[position] }}
      className={clsx(
        wrapperClasses[type],
        "animate-toastIn",
        "flex justify-between items-center overflow-hidden rounded-md shadow-lg my-3 relative"
      )}
      ref={wrapperRef}
      role={"alert"}
    >
      {!!duration && (
        <div className="absolute bottom-0 right-0 left-0 w-full h-1 bg-neutral-100 dark:bg-neutral-500">
          <span
            className="absolute bg-neutral-200 left-0 top-0 bottom-0 h-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {icon && (
        <div className={clsx(iconClasses[type], "flex p-3")}>
          <div className="inline-flex justify-center items-center w-6 h-6">
            <span className="sr-only">{type} Icon</span>
            {icon}
          </div>
        </div>
      )}
      <div className="text-sm font-semibold flex-grow p-3">{message}</div>
      <button
        aria-label="Close"
        onClick={() => {
          remove(id, wrapperRef);
        }}
        className={closeButtonClasses}
      >
        <span className="sr-only">Close</span>
        {closeIcon}
      </button>
    </div>
  );
};
