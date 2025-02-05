import '../../src/App.css';

function LandingPage() {
  return (
    <div className="fixed top-0 left-0 w-full bg-blue-500 text-white p-4 shadow-md flex items-center justify-between">
      {/* اللوجو */}
      <img 
        className="pl-3 w-16 h-16" 
        src="https://img.icons8.com/?size=80&id=wVnsxSeJRYdI&format=png" 
        alt="Logo"
      />
      
      {/* زر نصي قابل للنقر */}
      <button className="text-amber-500 text-lg font-semibold hover:underline focus:outline-none">
        Success
      </button>
    </div>
  );
}

export default LandingPage;
