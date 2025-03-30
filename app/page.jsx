"use client";

export default function Home() {
  const data = [
    "proactive-awareness.mp4",
    "dopamine.mp4",
    "realization.mp4",
    "fitness.mp4",
  ];
  return (
    <div>
      <div id="navbar" className="font-light z-10">
        <div className="mx-[10px] lg:mx-[50px] flex flex-row justify-between py-6">
          <div>creativemarc</div>
          <div className="flex flex-row gap-10">
            <div className="z-10">
              <a href="https://linktr.ee/creativemarc">contact</a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="wrapper"
        className="mx-[10px] lg:mx-[50px] flex flex-col gap-[50px] lg:gap-[200px]"
      >
        <div id="creativemarc" className="flex flex-col items-center">
          <h1 className="text-[4em] md:text-[8em] lg:text-[11em] translate-y-1 md:translate-y-5 lg:translate-y-10 tracking-tighter">
            <span className="italic">creative</span>marc
          </h1>
          <p className="text-center  opacity-85 font-light tracking-tighter text-[1em] lg:text-[1.2em] w-[90%] md:w-[60%]   lg:w-[45%] ">
            I create short form videos that catch people's attention on IG Reels
            and TikTok. My edits are made to stand out and keep viewers
            watching.
          </p>
        </div>

        <div id="works" className="flex flex-row flex-wrap gap-2">
          {data.map((video, key) => {
            return (
              <div
                className="basis-[calc(100%-8px)] md:basis-[calc(50%-8px)] lg:basis-[calc(25%-8px)] bg-white/5  cursor-pointer z-10 transform-gpu"
                key={key}
              >
                <a href={`/edits/${video}`}>
                  <video
                    src={`/edits/${video}`}
                    autoPlay
                    muted
                    loop
                    preload="metadata "
                    className="cursor-pointer"
                  ></video>
                </a>
              </div>
            );
          })}
          <div className="h-screen w-screen fixed top-0 z"></div>
        </div>
        <div
          id="botnav"
          className="hidden md:flex lg:flex flex-row justify-between"
        >
          <h1 className="md:text-[3em] lg:text-[5em] tracking-tighter">
            <span className="italic">creative</span>marc
          </h1>
          <div className="flex flex-row justify-between gap-16 self-center md:translate-y-1 lg:translate-y-3 font-light tracking-tight">
            <div>
              <span className="opacity-40">email</span>
              <div>maczxc@gmail.com</div>
            </div>
            <div>
              <span className="opacity-0">socials</span>
              <div className="flex flex-row gap-5">
                <div>
                  <a href="https://www.instagram.com/creativemarc_/">
                    instagram
                  </a>
                </div>
                <div>
                  <a href="https://www.tiktok.com/@creativemarc_">tiktok</a>
                </div>
                <div>
                  <a href="https://www.youtube.com/@creativemarc-d3h">
                    youtube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
