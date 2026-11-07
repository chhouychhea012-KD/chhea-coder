import type { Metadata } from "next";
import { ActivitiesShowcase } from "@/components/activities-showcase";

export const metadata: Metadata = {
  title: "សកម្មភាព | ការណែនាំស្ម័គ្រចិត្ត",
  description: "សកម្មភាពស្ម័គ្រចិត្តរបស់ ឈយ ឈា ក្នុងការណែនាំនិស្សិតជំនាន់ក្រោយសម្រាប់គម្រោង VC1 និងការអភិវឌ្ឍជាក់ស្តែង។",
  alternates: { canonical: "/activities/km", languages: { "en-US": "/activities", "km-KH": "/activities/km" } },
};

export default function KhmerActivitiesPage() {
  return <ActivitiesShowcase />;
}
