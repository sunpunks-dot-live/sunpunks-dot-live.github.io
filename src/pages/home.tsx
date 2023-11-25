export default function Home() {
  return (
    <article className="font-body p-8 flex flex-col justify-center items-center w-full">
      <img
        alt="Sunpunks Logo"
        src="logos/sp_fullcolor-min.png"
        className="max-w-xs mg:max-w-sm"
      />
      <h1 className="font-display text-2xl md:text-3xl lg:text-4xl text-center">
        An ATX-based Streamer group
      </h1>
    </article>
  );
}
