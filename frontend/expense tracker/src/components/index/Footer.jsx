import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t" style={{ borderColor: "#E5E7EB" }}>
      <div className="container mx-auto px-6 max-w-[1200px] py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold" style={{ color: "#8B5CF6" }}>
              PennyTrack
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
              Simple expense tracking that actually works. Built for students and young professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Twitter className="h-5 w-5" style={{ color: "#6B7280" }} />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Github className="h-5 w-5" style={{ color: "#6B7280" }} />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Linkedin className="h-5 w-5" style={{ color: "#6B7280" }} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: "#111827" }}>
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline" style={{ color: "#6B7280" }}>Features</a></li>
              <li><a href="#" className="hover:underline" style={{ color: "#6B7280" }}>Pricing</a></li>
              <li><a href="#" className="hover:underline" style={{ color: "#6B7280" }}>Security</a></li>
              <li><a href="#" className="hover:underline" style={{ color: "#6B7280" }}>Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: "#111827" }}>
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline" style={{ color: "#6B7280" }}>Help Center</a></li>
              <li><a href="#" className="hover:underline" style={{ color: "#6B7280" }}>Contact Us</a></li>
              <li><a href="#" className="hover:underline" style={{ color: "#6B7280" }}>API Docs</a></li>
              <li><a href="#" className="hover:underline" style={{ color: "#6B7280" }}>Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4" style={{ color: "#111827" }}>
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline" style={{ color: "#6B7280" }}>About</a></li>
              <li><a href="#" className="hover:underline" style={{ color: "#6B7280" }}>Blog</a></li>
              <li><a href="#" className="hover:underline" style={{ color: "#6B7280" }}>Careers</a></li>
              <li><a href="#" className="hover:underline" style={{ color: "#6B7280" }}>Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8" style={{ borderColor: "#E5E7EB" }}>
          <p className="text-center text-sm" style={{ color: "#6B7280" }}>
            © 2024 PennyTrack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
