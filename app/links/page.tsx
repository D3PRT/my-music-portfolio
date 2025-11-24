import Link from "next/link";

export default function Links() {
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
            <Link href="/live-shows" className="hover:text-purple-400 transition-colors">Live Shows</Link>
            <Link href="/links" className="text-purple-400 transition-colors">Links</Link>
            <Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 px-6 pb-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-center">Links</h1>
          
          <div className="space-y-4">
            <a href="#" className="block bg-gray-800/50 backdrop-blur rounded-lg p-6 hover:bg-gray-800 transition-all border border-gray-700 text-center text-xl font-semibold hover:text-purple-400">
              Spotify
            </a>
            <a href="#" className="block bg-gray-800/50 backdrop-blur rounded-lg p-6 hover:bg-gray-800 transition-all border border-gray-700 text-center text-xl font-semibold hover:text-purple-400">
              Apple Music
            </a>
            <a href="#" className="block bg-gray-800/50 backdrop-blur rounded-lg p-6 hover:bg-gray-800 transition-all border border-gray-700 text-center text-xl font-semibold hover:text-purple-400">
              SoundCloud
            </a>
            <a href="#" className="block bg-gray-800/50 backdrop-blur rounded-lg p-6 hover:bg-gray-800 transition-all border border-gray-700 text-center text-xl font-semibold hover:text-purple-400">
              Bandcamp
            </a>
            <a href="#" className="block bg-gray-800/50 backdrop-blur rounded-lg p-6 hover:bg-gray-800 transition-all border border-gray-700 text-center text-xl font-semibold hover:text-purple-400">
              YouTube
            </a>
            <a href="#" className="block bg-gray-800/50 backdrop-blur rounded-lg p-6 hover:bg-gray-800 transition-all border border-gray-700 text-center text-xl font-semibold hover:text-purple-400">
              Instagram
            </a>
            <a href="#" className="block bg-gray-800/50 backdrop-blur rounded-lg p-6 hover:bg-gray-800 transition-all border border-gray-700 text-center text-xl font-semibold hover:text-purple-400">
              Twitter / X
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
