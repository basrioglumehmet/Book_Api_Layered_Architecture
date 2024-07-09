import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const combineClasses = (...classValues: ClassValue[]) =>
  twMerge(clsx(classValues));
