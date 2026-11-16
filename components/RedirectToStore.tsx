"use client";

import { useEffect } from "react";
import { Course } from "@/lib/site";

export function RedirectToStore({ course }: { course: Course }) {
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(ua) && course.ios) {
      window.location.replace(course.ios);
    } else if (/android/.test(ua)) {
      window.location.replace(course.android);
    }
  }, [course.android, course.ios]);

  return null;
}
