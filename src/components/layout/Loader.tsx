// __________________________________________________________________________________________________________________________________
// __________________________________________________________________________________________________________________________________



// IEEE WEBSITE LOADER

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col bg-[#000510] overflow-hidden">
      {/* Progress bar */}
      <div className="h-1 bg-white/5">
        <div className="h-full w-full bg-white/30 animate-progress origin-left" />
      </div>

      {/* Radial gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white-600/20 via-blue-900/10 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
      </div>

      {/* Centered content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative">
          {/* Multiple flare effects */}
          <div className="absolute -inset-10 bg-gradient-radial from-blue-500/10 via-blue-600/5 to-transparent blur-2xl" />
          <div className="absolute -inset-10 bg-gradient-radial from-blue-400/10 via-transparent to-transparent blur-xl animate-pulse" />

          {/* Text with inner glow */}
          <div className="relative">
            <span className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-blue/80 animate-subtle-glow filter drop-shadow-lg">
              JCER IEEE
            </span>
            {/* Inner glow effect */}
            <span className="absolute inset-0 text-4xl md:text-6xl font-bold text-white/10 blur-[2px] animate-pulse">
              JCER IEEE
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader





// __________________________________________________________________________________________________________________________________
// __________________________________________________________________________________________________________________________________







// const Loader = () => {
//     return (
//       <div className="fixed inset-0 flex flex-col bg-[#000510] overflow-hidden">
//         {/* Progress bar */}
//         <div className="h-1 bg-white/5">
//           <div className="h-full w-full bg-white/30 animate-progress origin-left" />
//         </div>
  
//         {/* Radial gradient background */}
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-blue-900/10 to-transparent" />
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
//         </div>
  
//         {/* Centered content */}
//         <div className="flex-1 flex items-center justify-center">
//           <div className="relative">
//             {/* JCER Text with alternating shine effect */}
//             <div className="relative text-center">
//               <span className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80 animate-shine">
//                 JCER
//               </span>
//             </div>
  
//             {/* IEEE Text with alternating shine effect */}
//             <div className="relative text-center mt-2">
//               <span className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80 animate-shine-delayed">
//                 IEEE
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Loader;
  