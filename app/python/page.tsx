import type { Metadata } from "next";
import { CourseView } from "@/components/CourseView";
import { courseById } from "@/lib/site";

const course = courseById("python");

export const metadata: Metadata = {
  title: "Learn Python",
  description: course.description,
};

export default function PythonPage() {
  return <CourseView course={course} />;
}
