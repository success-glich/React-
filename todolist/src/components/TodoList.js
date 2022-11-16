import React from "react";
import { useState } from "react";
import Header from "./todoComponent/Header"


export default function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
//   const[strike,setStrike]=useState("");
  function addActivity() {
    // setListData([...listData,activity])
    // console.log(listData);
    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }
  function clearAll(){
    setListData((prevList)=>{
        return([]);
    })
  }
  function clickList(key){
    if(key.target.className.includes('strike')){
        key.target.className ="listData";

    }else{

        key.target.className +=" strike";
    }
  }
  return (
    <>
      <div className="container">
      <Header/>

        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button className="btn" onClick={addActivity}>Add</button>
        <button className="btn btn-danger" onClick={clearAll}>Clear All</button>
        
        <p className="List-heading">Here is Your List :{")"}</p>
        {listData !== [] &&
          listData.map((data, index) => {
            return (
              <>
                <p key={index}>
                <div className="listData"  onClick={clickList} >
                    
                 <span className>  {data}</span>
                    </div>
                    </p>
              </>
            );
          })}
      </div>
    </>
  );
}
