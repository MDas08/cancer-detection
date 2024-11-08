import React from 'react'
import cancerInformation from './info'

const Visual = () => {
    return (
        <div>
            <div id='Title' className='flex-col mt-8 mx-8 space-y-2'>
                <h1 className='font-light text-4xl'>Breast Cancer Prediction</h1>
                <h2 className='font-light text-xl'>Group 4 Major Project - Autumn 2024</h2>
                <hr className='my-4'/>
            </div>

            <div id='Cancer Info' className='flex-col mt-8 mx-8 space-y-2'>
                <h1 className='font-normal text-2xl'>What is Breast Cancer?</h1>
                <p className='font-light text-xl'>{cancerInformation}</p>
                <br/>
                <p className='font-normal text-xl'>In this project we have created an ML Model which predicts if a breast lump is cancerous or not on the basis of data that is gleaned from a mammograph.</p>
            </div>

            <div className='flex justify-center mt-8 mx-8'>
                <div id='Graphs' className='flex-col space-y-2 w-3/4'>
                    <img className=' h-auto rounded-lg m-2' src='/Graph5.png' alt='graph1' />
                    <img className=' h-auto rounded-lg m-2' src='/Graph10.png' alt='graph1' />
                    <img className=' h-auto rounded-lg m-2' src='/Graph11.png' alt='graph1' />
                    <img className=' h-auto rounded-lg m-2' src='/Graph9.png' alt='graph1' />
                    
                    <div className='flex h-1/5 justify-center'>
                    <img className=' h-auto rounded-lg m-2' src='/Graph8.png' alt='graph1' />
                    <img className=' h-auto rounded-lg m-2' src='/Graph7.png' alt='graph1' />
                    <img className=' h-auto rounded-lg m-2' src='/Graph4.png' alt='graph1' />
                    
                    </div>
                    
                    <img className=' h-auto rounded-lg m-2' src='/Graph6.png' alt='graph1' />
                </div>
            </div>
            
            <div id='Prediction' className='flex justify-center my-8 mx-8 space-y-2'>
                <button className='rounded-xl font-semibold text-2xl bg-slate-500 hover:bg-slate-600 border border-slate-50 px-4 py-2'>Predict</button>
            </div>

        </div>
    )
}

export default Visual