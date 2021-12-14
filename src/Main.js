import React from 'react';
import './main.scss';
import {useState,useEffect} from 'react';
import Header from './components/Header/Header';
import DataTable from './components/Datatable/DataTable';
import {Link,BrowserRouter as Router,Switch} from 'react-router-dom';
import {db} from './firebase-config';
import {collection,getDocs,doc,updateDoc,getDoc,query,where} from 'firebase/firestore';
import reactDom from 'react-dom';

const Main = () => {
    const[calc,setCalc] = useState([]);
    const[exrateValue,setexrateValue] = useState();
    useEffect(()=>{
        const getData = async() => {
            // const q = query(collection(db,"calculations"), where("id","==",));
            // const data = await getDocs(q);
            const querySnapshot = await getDocs(collection(db,"calculations"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                setCalc({...doc.data(),id:doc.id});
                setexrateValue(doc.data().exrate)
                console.log(calc.id)
              });
        };
        return getData();
    },[])
    const[onchange,setOnchange] = useState();
    const[isInEditMode,setisInEditMode] = useState(false);
    const changeEditMode = () => {
        setisInEditMode((isInEditMode)=>!isInEditMode);
    }
    const onInputChange = (e) =>{
        e.preventDefault();
        setOnchange(e.target.value);
    }
    const updateExrate = async(id) => {
        const calcDoc = doc(db,"calculations",id);
        console.log(calcDoc)
        const newField = {exrate:onchange};
        await updateDoc(calcDoc,newField);
        setisInEditMode(false);
        window.location.reload()
    }
    return(
        <div className="main">
            <Header/>

            <div className="datatable">
                <div className="datatable--rate">

                    {isInEditMode ? 
                    <div style={{display:"flex",alignItems:"center"}}>
                        <p style={{marginRight:"10px",fontSize: "20px"}}>Exchange Rate -</p>
                        <input style={{fontSize: "20px"}} style={{width:"4rem",textAlign:"center"}} type="text" defaultValue={calc.exrate}
                        onChange={onInputChange} />
                        <button onClick={()=>{updateExrate(calc.id)}}>yes</button>
                        <button onClick={changeEditMode}>X</button>
                    </div> 
                    :
                    <div>
                    <div style={{display:"flex",alignItems:"center",marginBottom:"-1rem"}}>
                    <p style={{marginRight:"10px",fontSize: "20px"}}>Exchange Rate -</p>
                    <div style={{fontSize: "20px"}} onDoubleClick={changeEditMode}>
                        {exrateValue}
                    </div>
                    </div>
                    <span style={{display:"flex",marginLeft:"5rem"}}>(Double click to edit rate.)</span>
                    </div>
                    }
                </div>
                <DataTable calc={calc}/>
            </div>
        </div>
    )
}

export default Main;