import React from 'react';

function App() {
  return (
    <section 
      className="relative h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* White Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Gupta Dental Care
        </h1>
        
        <h2 className="text-xl md:text-2xl text-teal-600 font-semibold mb-8">
          Healthy Smiles, Trusted Care
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Book Appointment */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg font-medium">
            Book Appointment
          </button>

          {/* Call Doctor */}
          <button className="border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-600 hover:text-white transition duration-300 font-medium">
            Call Doctor
          </button>

          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/919999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition duration-300 shadow-lg font-medium"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              fill="currentColor" 
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
            </svg>
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
