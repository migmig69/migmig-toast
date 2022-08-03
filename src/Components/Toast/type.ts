import { ReactNode, RefObject } from "react";

export type ToastProps = {
  id: number;
  type?: "success" | "info" | "warning" | "error";
  message?: ReactNode;
  duration?: number;
  position?: ToastPositionType;
  icon?: ReactNode | boolean;
};

export type ToastPositionType =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "bottomRight"
  | "bottomCenter"
  | "bottomLeft";

export type RequiredToastProps = Required<ToastProps>;

export type ToastContextType = {
  add: (toast: Omit<ToastProps, "id">) => void;
  remove: (toastId: number, ref: RefObject<HTMLDivElement>) => void;
  position: ToastPositionType;
};
