import React from 'react'

const musicBandsL = [
    {
        name: 'rocka'
    },
    {
        name: 'stayway'
    },
];

const musicBandsM = [
    {
        name: 'moth'
    },
    {
        name: 'paris sobre llamas'
    },
    {
        name: 'nauj project'
    }
];

const musicBandsS = [
    {
        name: 'silversmoke'
    },
    {
        name: 'sunset street'
    },
    {
        name: 'job'
    },
    {
        name: 'rokamandú'
    },
    {
        name: 'santa pacha'
    },
    {
        name: 'constelan sound'
    },
    {
        name: 'paradoja'
    },
    {
        name: 'sonic barton'
    },
    {
        name: 'riverstone'
    }

];





export const Bands = () => {
    return (
        <section className=" w-full h-screen flex flex-col items-center justify-center pt-20 max-[800px]:pt-24 px-14">
            <div>
                <h2 className="text-center text-6xl mb-20 max-[800px]:mb-4">bandas</h2>
                <p className="uppercase text-center text-[#FF8418] ">
                    <div className="mb-4 text-7xl max-[800px]:text-base flex flex-wrap justify-center gap-4 text-center [&>span]:text-white">
                        <span className="text-7xl max-[800px]:text-xl uppercase">rocka</span> | <span className="text-7xl max-[800px]:text-xl uppercase">stayway</span>
                    </div>
                    <div className="mb-4 text-5xl max-[800px]:text-lg flex flex-wrap justify-center gap-4 text-center [&>span]:text-white">
                        <span className="text-5xl max-[800px]:text-lg uppercase">moth</span> | <span className="text-5xl max-[800px]:text-lg uppercase">paris sobre llamas</span> | <span className="text-5xl max-[800px]:text-base uppercase">nauj project</span>
                    </div>
                    <div className="mb-2 text-4xl max-[800px]:text-base flex flex-wrap justify-center gap-4 text-center [&>span]:text-white">
                        <span className="text-4xl max-[800px]:text-base uppercase">silversmoke</span> | <span className="text-4xl max-[800px]:text-base uppercase">sunset street</span> | <span className="text-4xl max-[800px]:text-base uppercase">job</span> | <span
                            className="text-4xl max-[800px]:text-base uppercase">rokamandú</span> | <span
                                className="text-4xl max-[800px]:text-base uppercase">santa pacha</span> | <span
                                    className="text-4xl max-[800px]:text-base uppercase">constelan sound</span> | <span
                                        className="text-4xl max-[800px]:text-base uppercase">paradoja</span> | <span
                                            className="text-4xl max-[800px]:text-base uppercase">sonic barton</span> | <span
                                                className="text-4xl max-[800px]:text-base uppercase">riverstone</span>
                    </div>
                </p>
            </div>
        </section>
    )
}
