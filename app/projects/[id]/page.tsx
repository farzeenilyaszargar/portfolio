import { notFound } from "next/navigation";
import { projects } from "@/components/projectsList";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ✅ Await params first
  const { id } = await params;

  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}
