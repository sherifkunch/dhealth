import type { PricingCategory } from "@/types";

interface PricingTableProps {
  categories: PricingCategory[];
}

export function PricingTable({ categories }: PricingTableProps) {
  return (
    <div className="space-y-10">
      {categories.map((category) => (
        <div key={category.category}>
          <h2 className="text-xl font-semibold">{category.category}</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-muted-foreground">
                  <th className="pb-3 pr-4 font-medium">Услуга</th>
                  <th className="hidden pb-3 pr-4 font-medium sm:table-cell">Пакет</th>
                  <th className="pb-3 pr-4 text-right font-medium">Цена (лв)</th>
                  <th className="hidden pb-3 text-right font-medium md:table-cell">Цена (€)</th>
                </tr>
              </thead>
              <tbody>
                {category.items.map((item) => (
                  <tr
                    key={item.name}
                    className={`border-b last:border-0 ${
                      item.sessions ? "bg-primary/5" : ""
                    }`}
                  >
                    <td className="py-3 pr-4">{item.name}</td>
                    <td className="hidden py-3 pr-4 text-muted-foreground sm:table-cell">
                      {item.sessions ?? "—"}
                    </td>
                    <td className="py-3 pr-4 text-right font-medium">
                      {item.priceBGN} лв
                    </td>
                    <td className="hidden py-3 text-right text-muted-foreground md:table-cell">
                      €{item.priceEUR.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
