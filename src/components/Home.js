function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-green-700">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/path-to-hero-image.jpg"
            alt="BSA at UW-Madison"
          />
          <div className="absolute inset-0 bg-green-700 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Welcome to Bangladesh Student Association
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Connecting Bangladeshi students at UW-Madison through culture, community, and celebration
          </p>
          <div className="mt-10">
            <a
              href="#upcoming-events"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50"
            >
              Upcoming Events
            </a>
          </div>
        </div>
      </div>

      {/* Featured Events Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Event Cards */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src="/path-to-event-image.jpg"
              alt="Event"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Pohela Boishakh Celebration</h3>
              <p className="mt-2 text-gray-600">Join us for Bengali New Year celebrations!</p>
              <div className="mt-4">
                <a href="#" className="text-green-600 hover:text-green-700">Learn more →</a>
              </div>
            </div>
          </div>
          {/* Add more event cards as needed */}
        </div>
      </div>

      {/* About Section Preview */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900">About BSA</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              The Bangladesh Student Association at UW-Madison is dedicated to creating a home away from home
              for Bangladeshi students while sharing our rich culture with the broader campus community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 