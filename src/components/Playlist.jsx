





export const Playlist = () => {
    return (
        <section className=" w-full h-screen flex flex-col items-center justify-center pt-20 max-[800px]:pt-24 px-14">
            
                <h2 className="text-center text-6xl max-[800px]:text-3xl mt-20 mb-20 max-[800px]:mb-4">escucha la playlist oficial</h2>
                <iframe className="w-[400px] max-[800px]:w-[310px]"  src="https://open.spotify.com/embed/playlist/0VU05u8qeU1xMbVN9J2oxW?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </section>
    )
}
