import React, {useState} from 'react';
import datalist from '../../data.json';
import './JobItems.css';


function JobItems () {
  let [data, setData]= useState(datalist);
  // console.log (datalist);
  let handelClear =  () => {
    //remove selected language in banner
    document.querySelector('.dataType').innerHTML="";
    // hide banner
    document.querySelector(".filteredBar").classList.add("disable");
    setData(datalist) ;
    
  }
  let handelClick = (e) => {
    console.log (e.target);
    //show banner tags
    document.querySelector(".filteredBar").classList.remove("disable");
    //display selected language in banner
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'r-item');
    newDiv.appendChild(document.createTextNode(e.target.innerText))
    document.querySelector('.dataType').appendChild(newDiv);
    //map on data array & display matched data
    let currentData = [...datalist]
    let newData = currentData.filter((data) =>
    (data.role.toLowerCase().includes(e.target.innerText.toLowerCase()) ||
    data.level.toLowerCase().includes(e.target.innerText.toLowerCase()) //||
    
    )   
    );
    setData(newData);
  }
  return ( 
    <div>
      <div className="filteredBar disable"> 
        <div className='dataType'></div>
        <div className='clear' onClick={handelClear}>Clear</div>
      </div>
      <div className="JobItemsContainer">
      {data.map(item => (
                <div key={item.id} className={item.new && item.featured ? "JobItemList pseudo" : "JobItemList"}>
                  <div className='LeftItem'>
                      <img className="logo" src={item.logo} alt={item.company}/>
                      <div className='LeftItem-col'>
                      <div className="company">{item.company}
                      {item.new ? <span className='new'>NEW!</span> : ""}
                      {item.featured ? <span className='featured'>FEATURED</span> : ""}
                      </div>
                      <div className="position">{item.position}</div>
                        <div>
                      <ul className="bottomItem">
                        <li className="postedAt">{item.postedAt} &#183;</li>
                        <li className="contract">{item.contract} &#183;</li>
                        <li className="location">{item.location}</li>
                      </ul>
                        </div>
                        </div>
                  </div>
                      <div className="break-line"></div>
                  <div className="RightItem">
                        <div className='container'>
                        <div className="r-item role" onClick={handelClick}> {item.role} </div>
                        <div className="r-item level" onClick={handelClick}> {item.level} </div>
                        {item.languages? item.languages.map(lang => <div key={Math.random()} className="r-item languages0" onClick={handelClick}> {lang} </div> ) : "" }
                        {item.tools? item.tools.map(tool => <div key={Math.random()} className="r-item tools" onClick={handelClick}> {tool} </div> ) : ""}
                        </div>
                  </div>
                
                </div>
                
                ))}
                </div>
        </div>
)
}
export default JobItems;