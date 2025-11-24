import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-wider hover:text-purple-400 transition-colors">
            D3PRT
          </Link>
          <div className="flex gap-8">
            <Link href="/music" className="hover:text-purple-400 transition-colors">Music</Link>
            <Link href="/videos" className="hover:text-purple-400 transition-colors">Videos</Link>
            <Link href="/about" className="hover:text-purple-400 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,0,255,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-8xl md:text-9xl font-bold mb-6 tracking-tighter">
            D3PRT
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 tracking-wide">
            ELECTRONIC MUSIC PRODUCER
          </p>
          <div className="flex gap-6 justify-center">
            <Link href="/music" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition-all hover:scale-105">
              Listen Now
            </Link>
            <Link href="/videos" className="px-8 py-4 border border-purple-600 hover:bg-purple-600/20 rounded-full font-semibold transition-all">
              Watch Videos
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Latest Releases */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Latest Releases</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-800/50 backdrop-blur rounded-lg overflow-hidden hover:bg-gray-800 transition-all hover:scale-105 cursor-pointer border border-gray-700">
                <div className="aspect-square bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center">
                  <div className="text-6xl">🎵</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Track Title {i}</h3>
                  <p className="text-gray-400">Album Name</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
