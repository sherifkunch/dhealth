import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ProcedureDetail } from "@/components/procedures/procedure-detail";
import { procedures, getProcedureBySlug, getAllProcedureSlugs } from "@/data/procedures";

interface ProcedurePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProcedureSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProcedurePageProps): Promise<Metadata> {
  const { slug } = await params;
  const procedure = getProcedureBySlug(slug);

  if (!procedure) {
    return { title: "Процедура не е намерена" };
  }

  return {
    title: procedure.name,
    description: procedure.shortDescription,
    openGraph: {
      title: `${procedure.name} | DHealth`,
      description: procedure.shortDescription,
    },
  };
}

export default async function ProcedurePage({ params }: ProcedurePageProps) {
  const { slug } = await params;
  const procedure = getProcedureBySlug(slug);

  if (!procedure) {
    notFound();
  }

  const relatedProcedures = procedures
    .filter((p) => p.id !== procedure.id)
    .slice(0, 3);

  return (
    <>
      <PageHeader
        title={procedure.name}
        description={procedure.shortDescription}
        breadcrumbs={[
          { label: "Процедури", href: "/protseduri" },
          { label: procedure.name },
        ]}
      />
      <ProcedureDetail
        procedure={procedure}
        relatedProcedures={relatedProcedures}
      />
    </>
  );
}
