import React, { useEffect } from 'react';
import './Header.scss';
import {useState} from 'react';
import {db} from '../../firebase-config';
import {collection,getDocs,doc,getDoc,query,where} from 'firebase/firestore';

const Header = () => {
    return (
        <div className="header">
            <div className="header--logo">
                <h1 style={{fontSize:"2rem",marginBottom:"3rem"}}>Profit & Loss</h1>
            </div>
        </div>
    )
}

export default Header;