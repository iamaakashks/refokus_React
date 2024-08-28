export default function Footer(){
    return (
        <div className='w-full'>
            <div className='max-w-screen-lg mx-auto flex items-center gap-20'>
                <div className='basis-1/2'>
                    <h1 className='text-[9rem] font-medium leading-tight'>refokus.</h1>
                </div>
                <div className='basis-1/2 flex gap-4'>
                    <div className='basis-2/3  '>
                        <h4 className='text-zinc-600 mb-10'>Socials</h4>
                        {["Instagram", "Twitter (X?)", "LinkedIn"].map((item, index)=> <a href='/' key={index} className='block mb-1 text-zinc-600'>{item}</a>)}
                    </div>
                    <div className=''>
                        <h4 className='text-zinc-600 mb-10'>Sitemap</h4>
                        {["Home", "Work", "Careers", "Contact"].map((item, index)=> <a href='/' key={index} className='flex flex-col gap-3 text-zinc-600'>{item}</a>)}
                    </div>
                    <div className='flex flex-col items-end gap-6  '>
                        <p className='leading-4 text-right'>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
                        <img className='w-32' src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}