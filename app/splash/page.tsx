export default function Splash() {
  const enter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Optionally, navigate to /works here if you want to handle routing programmatically
    window.location.href = "/works";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="lg:text-8xl md:text-6xl sm:text-4xl font-bold mb-4 red text-center text-rose-500">
        ALL DAY <br></br>EVERYDAY<br></br>FOREVER
      </h1>

      <a href="/works">Enter</a>
    </div>
  );
}
