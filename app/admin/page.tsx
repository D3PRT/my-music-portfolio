'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [uploadType, setUploadType] = useState<'image' | 'video' | 'audio'>('image');
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  // Check if already authenticated
  useEffect(() => {
    const auth = sessionStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Password check (you should change this!)
    if (password === 'D3PRT2024!') {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      setAuthError('');
    } else {
      setAuthError('Incorrect password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuth');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      
      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(selectedFile);
      } else {
        setPreview('');
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file');
      return;
    }

    setUploading(true);
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', uploadType);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`✅ File uploaded successfully: ${data.filename}`);
        setFile(null);
        setPreview('');
        const fileInput = document.getElementById('file-input') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setMessage(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      setMessage('❌ Upload failed');
    } finally {
      setUploading(false);
    }
  };

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="max-w-md w-full mx-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">D3PRT</h1>
            <p className="text-gray-400">Admin Access</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur rounded-lg p-8 border border-gray-700">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none"
                  placeholder="Enter admin password"
                  autoFocus
                />
              </div>
              
              {authError && (
                <div className="p-3 bg-red-900/30 border border-red-700 rounded-lg text-sm">
                  {authError}
                </div>
              )}
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition-all hover:scale-105"
              >
                Login
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <Link href="/" className="text-sm text-gray-400 hover:text-purple-400">
                ← Back to site
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Admin interface (only shown when authenticated)
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-wider hover:text-purple-400 transition-colors">
            D3PRT
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-purple-400 font-semibold">Admin Panel</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-semibold transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-24 px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-center">Upload Content</h1>

          <div className="bg-gray-800/50 backdrop-blur rounded-lg p-8 border border-gray-700">
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-3">Content Type</label>
              <div className="flex gap-4">
                <button
                  onClick={() => setUploadType('image')}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                    uploadType === 'image' ? 'bg-purple-600' : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  📷 Images
                </button>
                <button
                  onClick={() => setUploadType('video')}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                    uploadType === 'video' ? 'bg-purple-600' : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  🎥 Videos
                </button>
                <button
                  onClick={() => setUploadType('audio')}
                  className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                    uploadType === 'audio' ? 'bg-purple-600' : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  🎵 Audio
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3">Select File</label>
              <input
                id="file-input"
                type="file"
                accept={
                  uploadType === 'image' ? 'image/*' : uploadType === 'video' ? 'video/*' : 'audio/*'
                }
                onChange={handleFileChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-purple-600 file:text-white file:font-semibold hover:file:bg-purple-700 file:cursor-pointer"
              />
            </div>

            {preview && (
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">Preview</label>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <img src={preview} alt="Preview" className="max-w-full h-auto rounded" />
                </div>
              </div>
            )}

            {file && (
              <div className="mb-6 p-4 bg-gray-900 rounded-lg border border-gray-700">
                <p className="text-sm text-gray-400"><strong>File:</strong> {file.name}</p>
                <p className="text-sm text-gray-400"><strong>Size:</strong> {(file.size / 1024 / 1024).toFixed(2)} MB</p>
                <p className="text-sm text-gray-400"><strong>Type:</strong> {file.type}</p>
              </div>
            )}

            <button
              onClick={handleUpload}
              disabled={!file || uploading}
              className={`w-full px-8 py-4 rounded-full font-semibold transition-all ${
                !file || uploading ? 'bg-gray-700 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700 hover:scale-105'
              }`}
            >
              {uploading ? 'Uploading...' : 'Upload File'}
            </button>

            {message && (
              <div className={`mt-6 p-4 rounded-lg ${
                message.startsWith('✅') ? 'bg-green-900/30 border border-green-700' : 'bg-red-900/30 border border-red-700'
              }`}>
                <p>{message}</p>
              </div>
            )}
          </div>

          <div className="mt-8 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <h3 className="text-lg font-semibold mb-3">💡 Instructions</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Images will be saved to /public/images/</li>
              <li>• Videos will be saved to /public/videos/</li>
              <li>• Audio files will be saved to /public/audio/</li>
              <li>• Files will be accessible at /images/filename, /videos/filename, etc.</li>
              <li>• Recommended: Optimize images before uploading</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
