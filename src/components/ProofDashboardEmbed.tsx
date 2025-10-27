const ProofDashboardEmbed = () => {
  const metricsTable = [
    ["Week", "Leads", "Calls", "Wins", "Attach Rate (Guard)", "Refunds"],
    ["W1", "—", "—", "—", "—", "—"]
  ];

  return (
    <section 
      className="w-full py-16 md:py-20 bg-background" 
      data-testid="proof-dashboard"
      id="proof-dashboard"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Live Proof Dashboard
        </h2>

        {/* Loom placeholder */}
        <div className="bg-muted/50 border-2 border-dashed border-border rounded-lg p-8 mb-8 flex flex-col items-center justify-center min-h-[300px]">
          <p className="text-muted-foreground text-center font-medium mb-2">
            Loom Walkthrough
          </p>
          <p className="text-sm text-muted-foreground text-center">
            (Coming soon — first client proof)
          </p>
        </div>

        {/* Metrics Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-muted">
                {metricsTable[0].map((header) => (
                  <th
                    key={header}
                    className="px-4 py-3 text-left text-sm font-semibold border-b border-border"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {metricsTable.slice(1).map((row, idx) => (
                <tr key={idx} className="border-b border-border last:border-0">
                  {row.map((cell, cellIdx) => (
                    <td
                      key={cellIdx}
                      className="px-4 py-3 text-sm font-variant-numeric-tabular"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProofDashboardEmbed;
