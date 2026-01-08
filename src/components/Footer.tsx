import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <Container>
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white">Finech</h3>
            <p className="mt-4 max-w-sm text-sm">
              Modern financial infrastructure for developers and businesses.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>Payments</li>
              <li>APIs</li>
              <li>Pricing</li>
              <li>Security</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Developers</h4>
            <ul className="space-y-2 text-sm">
              <li>Documentation</li>
              <li>SDKs</li>
              <li>API Status</li>
              <li>Changelog</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6 text-center text-sm">
          © {new Date().getFullYear()} Finech. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
