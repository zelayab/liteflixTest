export function SkeletonCard() {
  return (
    <div className="flex flex-col justify-center  gap-4  animate-pulse w-full h-[144] lg:w-[224px]  bg-gray-900 rounded-lg">
      <div className="w-full h-[150px] bg-gray-900 bg-opacity-50 rounded-lg" />
      <div className="flex flex-col items-center gap-4 p-4"></div>
    </div>
  );
}
