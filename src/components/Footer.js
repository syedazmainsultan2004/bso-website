function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: bsa@wisc.edu</p>
            <p>Location: University of Wisconsin-Madison</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-300">Events</a></li>
              <li><a href="#" className="hover:text-green-300">Gallery</a></li>
              <li><a href="#" className="hover:text-green-300">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300">Facebook</a>
              <a href="#" className="hover:text-green-300">Instagram</a>
              <a href="#" className="hover:text-green-300">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p>© 2024 Bangladesh Student Association at UW-Madison. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 