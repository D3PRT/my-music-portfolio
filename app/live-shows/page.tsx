import Link from "next/link";

export default function LiveShows() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-wider hover:text-purple-400 transition-colors">
            D3PRT
          </Link>
          <div className="flex gap-8">
            <Link href="/all-music" className="hover:text-purple-400 transition-colors">All Music</Link>
            <Link href="/merch" className="hover:text-purple-400 transition-colors">Merch</Link>
            <Link href="/live-shows" className="text-purple-400 transition-colors">Live Shows</Link>
            <Link href="/links" className="hover:text-purple-400 transition-colors">Links</Link>
            <Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-12">Live Shows</h1>
          
          <div className="space-y-4">
            {[
              { date: "Dec 15, 2024", venue: "The Underground Club", city: "London, UK" },
              { date: "Dec 22, 2024", venue: "Neon Warehouse", city: "Berlin, DE" },
              { date: "Jan 5, 2025", venue: "Bass Factory", city: "Amsterdam, NL" },
            ].map((show, i) => (
              <div key={i} className="bg-gray-800/50 backdrop-blur rounded-lg p-6 hover:bg-gray-800 transition-all border border-gray-700 flex justify-between items-center">
                <div>
                  <div className="text-purple-400 font-semibold mb-1">{show.date}</div>
                  <h3 className="text-2xl font-bold mb-1">{show.venue}</h3>
                  <p className="text-gray-400">{show.city}</p>
                </div>
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition-all">
                  Get Tickets
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
