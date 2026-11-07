import type { Metadata } from "next";
import { ActivitiesShowcase } from "@/components/activities-showcase";

export const metadata: Metadata = {
  title: "Activities | Volunteer Mentorship",
  description: "Chhea Chhouy's volunteer mentoring activity, guiding junior students through the VC1 Project and real-world development practices.",
  alternates: { canonical: "/activities", languages: { "en-US": "/activities", "km-KH": "/activities/km" } },
};

export default function ActivitiesPage() {
  return <ActivitiesShowcase />;
}
