import type { IconType } from "react-icons";
import { FaAws, FaChartColumn, FaDatabase } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import {
  SiBootstrap,
  SiChartdotjs,
  SiCloudflare,
  SiCss,
  SiDjango,
  SiFigma,
  SiFirebase,
  SiFlask,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiLaravel,
  SiLinux,
  SiMysql,
  SiNginx,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxt,
  SiPhp,
  SiPostman,
  SiPython,
  SiPostgresql,
  SiReact,
  SiSass,
  SiSqlite,
  SiSwagger,
  SiTailwindcss,
  SiVuedotjs,
  SiWordpress,
  SiSpringboot,
  SiKeycloak,
  SiJquery,
  SiJson,
  SiMui,
  SiDotnet,
  SiAsana,
  SiIntellijidea,
} from "react-icons/si";
import { Code2 } from "lucide-react";

type IconDefinition = { icon: IconType; color: string };

const iconMap: Record<string, IconDefinition> = {
  "Next.js": { icon: SiNextdotjs, color: "var(--tech-ink)" },
  "Java Spring Boot": { icon: SiSpringboot, color: "#6DB33F" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  Keycloak: { icon: SiKeycloak, color: "#4D4D4D" },
  AWS: { icon: FaAws, color: "#FF9900" },
  Bootstrap: { icon: SiBootstrap, color: "#7952B3" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  jQuery: { icon: SiJquery, color: "#0769AD" },
  JSON: { icon: SiJson, color: "var(--tech-ink)" },
  "Material UI": { icon: SiMui, color: "#007FFF" },
  "C#": { icon: SiDotnet, color: "#512BD4" },
  Oracle: { icon: FaDatabase, color: "#F80000" },
  "VS Code": { icon: VscVscode, color: "#007ACC" },
  "IntelliJ IDEA": { icon: SiIntellijidea, color: "#FE315D" },
  Asana: { icon: SiAsana, color: "#F06A6A" },
  "PHP (MVC)": { icon: SiPhp, color: "#8892BF" },
  "Vue.js": { icon: SiVuedotjs, color: "#42B883" },
  "Nuxt.js": { icon: SiNuxt, color: "#00DC82" },
  "React.js": { icon: SiReact, color: "#61DAFB" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  "Bootstrap 5": { icon: SiBootstrap, color: "#7952B3" },
  "HTML & CSS": { icon: SiHtml5, color: "#E34F26" },
  SASS: { icon: SiSass, color: "#CC6699" },
  Laravel: { icon: SiLaravel, color: "#FF2D20" },
  PHP: { icon: SiPhp, color: "#8892BF" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  Python: { icon: SiPython, color: "#3776AB" },
  Flask: { icon: SiFlask, color: "var(--tech-ink)" },
  Django: { icon: SiDjango, color: "#0C4B33" },
  "REST APIs": { icon: SiSwagger, color: "#85EA2D" },
  "Object-Oriented Programming": { icon: SiJavascript, color: "#F7DF1E" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  SQLite: { icon: SiSqlite, color: "#3B8FC4" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  "AWS EC2": { icon: FaAws, color: "#FF9900" },
  "AWS S3": { icon: FaAws, color: "#569A31" },
  "AWS RDS": { icon: FaAws, color: "#527FFF" },
  "Linux (Ubuntu)": { icon: SiLinux, color: "#FCC624" },
  Cloudflare: { icon: SiCloudflare, color: "#F38020" },
  "Git & GitHub": { icon: SiGithub, color: "var(--tech-ink)" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Jira: { icon: SiJira, color: "#2684FF" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  "Chart.js": { icon: SiChartdotjs, color: "#FF6384" },
  "Power BI": { icon: FaChartColumn, color: "#F2C811" },
  Nginx: { icon: SiNginx, color: "#009639" },
  WordPress: { icon: SiWordpress, color: "#21759B" },
  Git: { icon: SiGit, color: "#F05032" },
  CSS: { icon: SiCss, color: "#1572B6" },
};

export function SkillBadge({ name }: { name: string }) {
  const definition = iconMap[name];

  if (!definition) {
    return <Code2 className="skill-badge-icon skill-badge-fallback" size={15} aria-hidden="true" />;
  }

  const Icon = definition.icon;
  return <Icon className="skill-badge-icon" size={16} color={definition.color} aria-hidden="true" />;
}
