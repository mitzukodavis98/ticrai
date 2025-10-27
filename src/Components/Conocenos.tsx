export function Conocenos({lang}: { lang: string }) {

  const word = lang === "es" ? "✦ Conózcanos" : "✦ Get to know us";

  return(
    <p className="text-[#363539] text-[27px] font-just">{word}</p>
  );
}