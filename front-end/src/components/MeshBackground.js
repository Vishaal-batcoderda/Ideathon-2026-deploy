export default function MeshBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <div className="
      absolute
      w-[600px] h-[600px]
      bg-indigo-300/40
      blur-[160px]
      rounded-full
      top-[-100px]
      left-[-100px]
      animate-blob
      "></div>

      <div className="
      absolute
      w-[600px] h-[600px]
      bg-purple-300/40
      blur-[160px]
      rounded-full
      bottom-[-120px]
      right-[-120px]
      animate-blob animation-delay-2000
      "></div>

      <div className="
      absolute
      w-[500px] h-[500px]
      bg-pink-300/40
      blur-[160px]
      rounded-full
      top-[40%]
      left-[40%]
      animate-blob animation-delay-4000
      "></div>

    </div>
  );
}
