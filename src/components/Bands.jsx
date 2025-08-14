import React from 'react'



export const Bands = () => {
    return (
        <section className=" w-full h-screen flex flex-col items-center justify-center pt-20 max-[800px]:pt-24 px-14">
            <div>
                <h2 className="text-center text-4xl mt-16 mb-20 max-[800px]:mb-4">bandas</h2>
                <div className="uppercase text-center text-[#FF8418] ">
                    <div className="mb-4 text-7xl max-[800px]:text-base flex flex-wrap justify-center gap-4 text-center [&>span]:text-white">
                        <span className="text-7xl max-[800px]:text-2xl uppercase">pez errante</span> 
                    </div>
                    <div className="mb-4 text-5xl max-[800px]:text-lg flex flex-wrap justify-center gap-4 text-center [&>span]:text-white">
                        <span className="text-5xl max-[800px]:text-xl uppercase">autopista</span> | <span className="text-5xl max-[800px]:text-xl uppercase">nauj project</span>
                    </div>
                    <div className="mb-2 text-4xl max-[800px]:text-base flex flex-wrap justify-center gap-4 text-center [&>span]:text-white">
                         <span
                            className="text-4xl max-[800px]:text-lg uppercase">santa pacha</span> | <span
                                className="text-4xl max-[800px]:text-lg uppercase">himera</span> | <span
                                    className="text-4xl max-[800px]:text-lg uppercase">jack n`grass</span> | <span
                                        className="text-4xl max-[800px]:text-lg uppercase">lékel</span> | <span
                                            className="text-4xl max-[800px]:text-lg uppercase">justine y el infortunio</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
