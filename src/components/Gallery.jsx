import React from 'react'

export const Gallery = () => {
    return (
        <section class="w-full h-screen flex items-center justify-center px-20">
            <section
                class="flex w-full mt-24 h-[500px] [&>img]:w-0 [&>img]:grow [&>img]:object-cover [&>img]:opacity-95 [&>img]:duration-300 [&>img]:ease-in"
            >
                <img
                    class="hover:w-[300px] hover:cursor-crosshair hover:opacity-100"
                    src="/images/img-gallery-1.webp"
                    alt=""
                />
                <img
                    class="hover:w-[300px] hover:cursor-crosshair hover:opacity-100"
                    src="/images/img-gallery-3.webp"
                    alt=""
                />
                <img
                    class="hover:w-[300px] hover:cursor-crosshair hover:opacity-100"
                    src="/images/img-gallery-4.avif"
                    alt=""
                />
                <img
                    class="hover:w-[300px] hover:cursor-crosshair hover:opacity-100"
                    src="/images/img-gallery-5.avif"
                    alt=""
                />
                <img
                    class="hover:w-[300px] hover:cursor-crosshair hover:opacity-100"
                    src="/images/img-gallery-6.avif"
                    alt=""
                />
                <img
                    class="hover:w-[300px] hover:cursor-crosshair hover:opacity-100"
                    src="/images/img-gallery-7.avif"
                    alt=""
                />
                <img
                    class="hover:w-[300px] hover:cursor-crosshair hover:opacity-100"
                    src="/images/img-gallery-8.avif"
                    alt=""
                />
            </section>


        </section>
    )
}
