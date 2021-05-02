import React, { Component } from 'react'
import { ReactComponent as TreeGraphic } from '../constants/Moose2.svg';


export default class TreeImage extends Component {

    render() {
        return (
            <div style={{ postion: 'relative' }}>
                <div style={{ postion: 'absolute', left: '50%'}}>
                <TreeGraphic style={{  marginTop: '-50%', display: 'block' }}/>
                </div>
            </div>
        )
    }
}
