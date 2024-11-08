const Banner = () => {
    return (
        <article className="grid grid-cols-1 lg:grid-cols-2 ">
            <article className="col-span-1 h-[90vh] relative mr-1">
                <img
                    src="https://images.unsplash.com/photo-1638292858466-4b732d9aef2c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8V29tZW4lRTIlODAlOTlzJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Main image"
                    className="w-full h-full object-cover"
                />
                <article className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-4">
                    <h2 className="text-xl font-bold text-white">Women’s Fashion</h2>
                    <p className="text-white">Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="mt-2 px-4 py-2 text-white border-b-2 border-red-500">Shop now</button>
                </article>
            </article>

            <article className="col-span-1 grid grid-rows-2 gap-2 h-full">
                <article className="grid grid-cols-2 gap-2 h-full">
                    <article className="bg-cover bg-center relative min-h-[300px] max-h-[460px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1668408333255-934142993824?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJUUyJTgwJTk5cyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D')" }}>
                        <article className="bg-black bg-opacity-50 text-white h-full flex flex-col justify-center items-start p-2">
                            <h2 className="text-lg">Men’s Fashion</h2>
                            <p className="text-sm">Sitamet, consectetur adipiscing elit.</p>
                            <button className="mt-2 px-2 py-1 text-white     border-b-2 border-red-500">Shop now</button>
                        </article>
                    </article>
                    <article className="bg-cover bg-center relative min-h-[300px] max-h-[460px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8S2lkJUUyJTgwJTk5cyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D')" }}>
                        <article className="bg-black bg-opacity-50 text-white h-full flex flex-col justify-center items-start p-2">
                            <h2 className="text-lg">Kid’s Fashion</h2>
                            <p className="text-sm">Sitamet, consectetur adipiscing elit.</p>
                            <button className="mt-2 px-2 py-1 text-white     border-b-2 border-red-500">Shop now</button>
                        </article>
                    </article>
                </article>
                <article className="grid grid-cols-2 gap-2 h-full">
                    <article className="bg-cover bg-center relative min-h-[300px] max-h-[460px]" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1442518256/photo/face-makeup-and-brush-with-a-woman-black-model-applying-foundation-to-her-skin-in-studio-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=lGSOvKLTQhjkB5IAH5LFQ_jRs0DFILRSA-v4_eSitdA=')" }}>
                        <article className="bg-black bg-opacity-50 text-white h-full flex flex-col justify-center items-start p-2">
                            <h2 className="text-lg">Accessories</h2>
                            <p className="text-sm">Sitamet, consectetur adipiscing elit.</p>
                            <button className="mt-2 px-2 py-1 text-white     border-b-2 border-red-500">Shop now</button>
                        </article>
                    </article>
                    <article className="bg-cover bg-center relative min-h-[300px] max-h-[460px]" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1709033404514-c3953af680b4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEFjY2Vzc29yaWVzfGVufDB8fDB8fHww')" }}>
                        <article className="bg-black bg-opacity-50 text-white h-full flex flex-col justify-center items-start p-2">
                            <h2 className="text-lg">Small Image 4</h2>
                            <p className="text-sm">Sitamet, consectetur adipiscing elit.</p>
                            <button className="mt-2 px-2 py-1 text-white     border-b-2 border-red-500">Shop now</button>
                        </article>
                    </article>
                </article>
            </article>
        </article>
    );
};

export default Banner;
