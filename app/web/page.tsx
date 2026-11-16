import type { Metadata } from "next";
import { CourseView } from "@/components/CourseView";
import { courseById } from "@/lib/site";

const course = courseById("web");

export const metadata: Metadata = {
  title: "Learn Web Development",
  description: course.description,
};

export default function WebPage() {
  return <CourseView course={course} />;
}
