import { RequiredToastProps, ToastPositionType } from "./type";

// RequiredToastProps prevents Type Error
export const wrapperClasses: Record<RequiredToastProps["type"], string> = {
  info: "bg-blue-100 dark:bg-blue-800 dark:text-blue-100",
  success: "bg-green-100 dark:bg-green-800 dark:text-green-100",
  warning: "bg-orange-100 dark:bg-orange-800 dark:text-orange-100",
  error: "bg-red-100 dark:bg-red-700 dark:text-red-100",
};
// RequiredToastProps prevents Type Error
export const iconClasses: Record<RequiredToastProps["type"], string> = {
  info: "dark:bg-blue-100 bg-blue-500 text-white dark:text-blue-500",
  success: "dark:bg-green-100 bg-green-500 text-white dark:text-green-500",
  warning: "dark:bg-orange-100 bg-orange-500 text-white dark:text-orange-500",
  error: "dark:bg-red-100 bg-red-500 text-white dark:text-red-500",
};

export const closeButtonClasses =
  "w-4 h-4 mx-3 items-center justify-center text-gray-400 dark:text-gray-200 hover:text-gray-900 rounded-md focus:ring-2 focus:ring-gray-300 inline-flex dark:hover:text-white";

export const closeIcon = (
  <svg aria-hidden="true" viewBox="64 64 896 896" fill="currentColor">
    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
  </svg>
);

// return toast icon based on the toast type
export const getIcon = (type: RequiredToastProps["type"]) => {
  // This code is equivalent to Switch
  return {
    info: (
      <svg
        aria-hidden="true"
        viewBox="64 64 896 896"
        focusable="false"
        fill="currentColor"
      >
        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
        <path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
      </svg>
    ),
    error: (
      <svg
        aria-hidden="true"
        viewBox="64 64 896 896"
        focusable="false"
        fill="currentColor"
      >
        <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path>
        <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
      </svg>
    ),
    success: (
      <svg
        aria-hidden="true"
        viewBox="64 64 896 896"
        focusable="false"
        fill="currentColor"
      >
        <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
      </svg>
    ),
    warning: (
      <svg
        aria-hidden="true"
        viewBox="64 64 896 896"
        focusable="false"
        fill="currentColor"
      >
        <path d="M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"></path>
      </svg>
    ),
  }[type];
};

export const positionClasses: Record<ToastPositionType, string> = {
  topRight: "top-0 right-1",
  topCenter: "top-0 right-1/2 translate-x-1/2",
  topLeft: "top-0 left-1",
  bottomLeft: "bottom-0 left-1",
  bottomCenter: "bottom-0 right-1/2 translate-x-1/2",
  bottomRight: "bottom-0 right-1",
};

export const animationVariables: Record<ToastPositionType, string> = {
  topRight: "translateX(2000px)",
  topCenter: "translateY(-1300px)",
  topLeft: "translateX(-2000px)",
  bottomLeft: "translateX(-2000px)",
  bottomCenter: "translateY(1300px)",
  bottomRight: "translateX(2000px)",
};
