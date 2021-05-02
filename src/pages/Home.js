import React from 'react'
import ReactPlayer from 'react-player'
import TreeImage from '../components/TreeImage';
import '../App.css';


const Home = () => {
    return (
        <div style={{ width: '100%' }}>
            <div className="top" style={{
                paddingTop: '20%',
                justifyContent: 'flex-end',
                paddingBottom: '30%',
                // height: '30rem',
                display: 'flex',
                backgroundColor: '#fff7e5'}}>
                <h1 style={{ fontSize: '4rem', padding: '4rem' }}>Michael Miller</h1>
            </div>
            <TreeImage />
            <div className="bottom" style={{
                display: 'flex',
                paddingBottom: '5rem',
                justifyContent: 'center',
                backgroundColor: '#C49966'}}>
                <ReactPlayer 
                url="https://www.youtube.com/watch?v=kD5wPS6_1qU" 
                style={{ maxWidth: '80%' }}/>
            </div>
        </div>
    )
}

export default Home