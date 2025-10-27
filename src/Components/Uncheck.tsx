
export function Uncheck({ text }:{text:string}) {
  return (
    <>
      <p className="flex flex-row w-[80%] text-[16px] items-center font-semibold mr-[2%] my-[10px] max-sm:text-[14px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-7 text-red-500 mr-[6px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        {text}
      </p>
    </>
  );
}
