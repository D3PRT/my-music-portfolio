import Link from "next/link";

export default function Contact() {
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
            <Link href="/links" className="hover:text-purple-400 transition-colors">Links</Link>
            <Link href="/contact" className="text-purple-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-center">Get In Touch</h1>
          
          <div className="bg-gray-800/50 backdrop-blur rounded-lg p-8 border border-gray-700">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition-all hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="mt-12 text-center text-gray-400">
            <p>Or email directly: <a href="mailto:hello@d3prt.com" className="text-purple-400 hover:text-purple-300">hello@d3prt.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
