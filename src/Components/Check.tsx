export function Check({ text }: { text: string }) {
  return (
    <>
      <p className="flex flex-row w-full text-[16px] items-center font-semibold mr-[2%] my-[10px] max-sm:text-[14px]">
        <svg
          className="size-6 mr-1 bg-green-Vibrant rounded-full"
          viewBox="0 0 24 24"
        >
          <path
            d="M8 12.5l3 3 5-6"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {text}
      </p>
    </>
  );
}
