import type { Metadata } from "next";
import { CourseView } from "@/components/CourseView";
import { courseById } from "@/lib/site";

const course = courseById("java");

export const metadata: Metadata = {
  title: "Learn Java",
  description: course.description,
};

export default function JavaPage() {
  return <CourseView course={course} />;
}
