import React from 'react'
import Tabreceive from '../Tabreceive/Tabreceive';


const TabsPage = () => {
    return (
        <div className='bg-[#292A2C] h-screen pt-7'>

            <div className='bg-white  mt-10 mb-4 rounded-lg p-4   mx-4 '>
                <h1>This is Tabs page</h1>
                <br />
                <br />
            </div>

            <hr />
            <Tabreceive  items={items} />
        </div>
    )
}

export default TabsPage;


const items = [
    {
        title: "Tab1", Content: (
            <div className='border-2 border-blue-500 rounded-lg p-5 '>
                <h1 className='text-2xl text-blue-950 bg-slate-500'>Tab 1 content</h1>
                <p className='text-blue-800 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos ut quis debitis nesciunt reiciendis doloremque sint autem impedit? Nostrum iusto explicabo sint maxime hic autem, vitae aut ad voluptate.</p>
            </div>
        ),
    },
    {
        title: "Tab2", Content: (
            <div className='border-2 border-blue-500 rounded-lg p-5 '>
                <h1 className='text-2xl text-blue-950 bg-slate-500'>Tab 2 content</h1>
                <p className='text-blue-800 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos ut quis debitis nesciunt reiciendis doloremque sint autem impedit? Nostrum iusto explicabo sint maxime hic autem, vitae aut ad voluptate.</p>
            </div>
        ),
    },
    {
        title: "Tab3", Content: (
            <div className='border-2 border-blue-500 rounded-lg p-5 '>
                <h1 className='text-2xl text-blue-950 bg-slate-500'>Tab 3 content</h1>
                <p className='text-blue-800 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos ut quis debitis nesciunt reiciendis doloremque sint autem impedit? Nostrum iusto explicabo sint maxime hic autem, vitae aut ad voluptate.</p>
            </div>
        ),
    },
    {
        title: "Tab4", Content: (
            <div className='border-2 border-blue-500 rounded-lg p-5 '>
                <h1 className='text-2xl text-blue-950 bg-slate-500'>Tab 4 content</h1>
                <p className='text-blue-800 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos ut quis debitis nesciunt reiciendis doloremque sint autem impedit? Nostrum iusto explicabo sint maxime hic autem, vitae aut ad voluptate.</p>
            </div>
        ),
    },

]



