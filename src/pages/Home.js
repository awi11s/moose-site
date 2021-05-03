import React from 'react'
import ReactPlayer from 'react-player'
import TreeImage from '../components/TreeImage';
import { IoLogoTiktok, IoLogoInstagram } from "react-icons/io5";
import '../App.css';


const Home = () => {
    return (
        <div style={{ width: '100%' }}>
            <div className="top" style={{
                paddingTop: '10%',
                justifyContent: 'center',
                paddingBottom: '20%',
                // height: '30rem',
                display: 'flex',
                backgroundColor: '#fff7e5'}}>
                <h1 style={{ padding: '4rem' }}>MICHAEL MILLER</h1>
            </div>

            <TreeImage />
            
            <div className="bottom" style={{
                display: 'flex',
                paddingBottom: '5rem',
                justifyContent: 'center',
                backgroundColor: '#C49966'}}>
                <div style={{ textAlign: 'center'}}>
                    <h2>more music coming summer 2021</h2>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', }}>
                        <a href="https://www.tiktok.com/@michaelmillertiktok?lang=en"><IoLogoTiktok style={{ color: 'white', fontSize: '1.5rem'}}/></a>                    
                        <p> @michaelmillertiktok</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', }}>
                        <a href="https://www.instagram.com/moose_miller/"><IoLogoInstagram style={{ color: 'white', fontSize: '1.5rem' }}/></a>
                        <p> @moose_miller</p>
                    </div>
                    <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                        <ReactPlayer 
                        url="https://www.youtube.com/watch?v=kD5wPS6_1qU" 
                        width="100%"
                        height="100%"
                        style={{ position: 'absolute', top: 0, left: 0 }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home