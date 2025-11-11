const ErrNotFoundPage: React.FC = () => (
  <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white px-6">
    <div className="absolute inset-0 overflow-hidden">
      <div className="wave" />
      <div className="wave delay-1" />
      <div className="wave delay-2" />
    </div>

    <div className="relative text-center z-10">
      <h1 className="text-7xl font-extrabold tracking-tight mb-4 animate-pulse">
          404
      </h1>
      <p className="text-slate-300 text-lg mb-8 max-w-md mx-auto">
          Кажется, вы попали в черную дыру.
          Давайте вернемся на домашнюю орбиту 🌍
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-2xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
      >
          Вернуться на главную
      </a>
    </div>

    <div className="absolute text-[12rem] font-black text-slate-700 opacity-10 select-none pointer-events-none">
        ?
    </div>

    <style>{`
        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 120px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 100%;
          animation: waveMove 6s infinite linear;
        }

        .wave.delay-1 {
          animation-delay: -2s;
          opacity: 0.3;
        }

        .wave.delay-2 {
          animation-delay: -4s;
          opacity: 0.15;
        }

        @keyframes waveMove {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}
    </style>
  </main>
);

export default ErrNotFoundPage;
