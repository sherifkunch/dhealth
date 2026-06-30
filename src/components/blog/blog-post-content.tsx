import type { BlogSection } from "@/types";

interface BlogPostContentProps {
  sections: BlogSection[];
}

export function BlogPostContent({ sections }: BlogPostContentProps) {
  return (
    <div className="prose prose-slate max-w-none">
      {sections.map((section, i) => {
        if (section.type === "heading") {
          return (
            <h2
              key={i}
              className="mt-8 mb-3 text-xl font-semibold tracking-tight text-foreground"
            >
              {section.text}
            </h2>
          );
        }

        if (section.type === "list" && section.items) {
          return (
            <ul key={i} className="my-4 space-y-2 pl-5">
              {section.items.map((item, j) => (
                <li
                  key={j}
                  className="relative pl-1 text-sm leading-relaxed text-muted-foreground before:absolute before:-left-4 before:text-primary before:content-['•']"
                >
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={i}
            className="my-4 text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {section.text}
          </p>
        );
      })}
    </div>
  );
}
