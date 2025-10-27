import { Link } from "react-router-dom";
import ProofDashboardEmbed from "@/components/ProofDashboardEmbed";

export default function Dashboard() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-12 space-y-8">
        <nav className="text-sm">
          <Link to="/#gallery" className="underline">← Back</Link>
        </nav>
        
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Live Proof Dashboard</h1>
          <p className="text-muted-foreground">
            Loom walkthrough (coming soon). First client proof will appear here.
          </p>
        </header>
      </div>

      <ProofDashboardEmbed />
    </main>
  );
}
