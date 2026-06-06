import { Check, X } from "lucide-react";
import { comparisonRows } from "@/data/comparison";

export function ComparisonTable() {
  return (
    <section aria-labelledby="comparison-heading" className="section-padding bg-white">
      <div className="mx-auto px-4 md:px-[50px]" style={{ maxWidth: "1340px" }}>

        {/* Section header */}
        <div className="flex flex-col items-center text-center gap-5 mb-[65px]">
          <h2
            id="comparison-heading"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, var(--text-h2))",
              color: "var(--color-text-primary)",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Built Different From Conventional Construction
          </h2>
          <p
            className="font-normal self-stretch text-left md:self-auto md:text-center"
            style={{
              fontSize: "var(--text-body-2)",
              lineHeight: "1.75rem",
              color: "var(--color-text-secondary)",
              maxWidth: "800px",
            }}
          >
            Discover what makes modular construction different from traditional building
            and why it&apos;s the smarter choice for modern living
          </p>
        </div>

        {/* Table — horizontal scroll on mobile */}
        <div className="overflow-x-auto rounded-[10px]" style={{ border: "1px solid rgba(229,231,235,0.5)" }}>
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr>
                {/* Feature header */}
                <th
                  className="text-left px-6 py-5 font-semibold text-white rounded-tl-[10px]"
                  style={{
                    backgroundColor: "var(--color-secondary)",
                    fontSize: "var(--text-body-1)",
                    width: "29%",
                    borderBottom: "0.8px solid var(--color-border)",
                    borderRight: "0.8px solid var(--color-border)",
                  }}
                  scope="col"
                >
                  Feature
                </th>
                {/* Traditional header */}
                <th
                  className="text-left px-6 py-5 font-semibold text-white"
                  style={{
                    backgroundColor: "var(--color-secondary)",
                    fontSize: "var(--text-body-1)",
                    width: "34%",
                    borderBottom: "0.8px solid rgba(255,255,255,0.2)",
                    borderRight: "0.8px solid rgba(255,255,255,0.2)",
                  }}
                  scope="col"
                >
                  Traditional Construction
                </th>
                {/* THERMANEST header */}
                <th
                  className="text-left px-6 py-5 font-semibold text-white rounded-tr-[10px]"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    fontSize: "18px",
                    width: "37%",
                    borderBottom: "0.8px solid var(--color-border)",
                  }}
                  scope="col"
                >
                  THERMANEST Prefab
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => {
                const isLast = index === comparisonRows.length - 1;
                const borderB = isLast ? "none" : `0.8px solid var(--color-border)`;
                return (
                  <tr
                    key={row.feature}
                    className="transition-colors duration-100 hover:bg-surface/50"
                  >
                    {/* Feature cell */}
                    <td
                      className="px-6 font-normal"
                      style={{
                        height: "72px",
                        fontSize: "var(--text-body-3)",
                        color: "var(--color-text-secondary)",
                        borderBottom: borderB,
                        borderRight: "0.8px solid var(--color-border)",
                        backgroundColor: index % 2 === 0 ? "rgba(248,248,248,0.2)" : "transparent",
                      }}
                    >
                      {row.feature}
                    </td>
                    {/* Traditional cell */}
                    <td
                      className="px-6"
                      style={{
                        height: "72px",
                        borderBottom: borderB,
                        borderRight: "0.8px solid var(--color-border)",
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <X
                          size={20}
                          strokeWidth={2.5}
                          className="shrink-0"
                          style={{ color: "#ef4444" }}
                          aria-hidden="true"
                        />
                        <span
                          className="font-medium"
                          style={{
                            fontSize: "var(--text-body-3)",
                            color: "var(--color-text-secondary)",
                          }}
                        >
                          {row.traditional}
                        </span>
                      </div>
                    </td>
                    {/* THERMANEST cell */}
                    <td
                      className="px-6"
                      style={{
                        height: "72px",
                        borderBottom: borderB,
                        backgroundColor: "rgba(238,249,215,0.85)",
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <Check
                          size={20}
                          strokeWidth={2.5}
                          className="shrink-0"
                          style={{ color: "var(--color-primary)" }}
                          aria-hidden="true"
                        />
                        <span
                          className="font-medium"
                          style={{
                            fontSize: "var(--text-body-3)",
                            color: "var(--color-primary)",
                          }}
                        >
                          {row.thermanest}
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
