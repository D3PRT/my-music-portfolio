import Link from "next/link";

export default function AllMusic() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-wider hover:text-purple-400 transition-colors">
            D3PRT
          </Link>
          <div className="flex gap-8">
            <Link href="/all-music" className="text-purple-400 transition-colors">All Music</Link>
            <Link href="/merch" className="hover:text-purple-400 transition-colors">Merch</Link>
            <Link href="/live-shows" className="hover:text-purple-400 transition-colors">Live Shows</Link>
            <Link href="/links" className="hover:text-purple-400 transition-colors">Links</Link>
            <Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-12">All Music</h1>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-800/50 backdrop-blur rounded-lg overflow-hidden hover:bg-gray-800 transition-all hover:scale-105 cursor-pointer border border-gray-700">
                <div className="aspect-square bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center">
                  <div className="text-6xl">🎵</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Track Title {i}</h3>
                  <p className="text-gray-400 mb-4">Album Name</p>
                  <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-sm font-semibold transition-all">
                    Play Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
