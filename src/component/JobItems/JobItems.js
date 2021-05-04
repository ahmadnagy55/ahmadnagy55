import React from 'react';
import datalist from '../../data.json';
import './JobItems.css';

//console.log(datalist[0].logo)
// async function get () {
//   let res = await fetch('../../data.json')
//   let data = await res.json();
//   console.log(data)
// }
// get();
function JobItems () {
  let handelClear =  () => {
    document.querySelector(".filteredBar").classList.add("disable");
  }
  return ( 
    <div>
      <div className="filteredBar"> 
        <div className='dataType'>Filtered Data</div>
        <div className='clear' onClick={handelClear}>Clear</div>
      </div>
      <div className="JobItemsContainer">
      {datalist.map(item => (
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
                        <div className="r-item role">{item.role}</div>
                        <div className="r-item level">{item.level}</div>
                        {item.languages? item.languages.map(lang => <div key={Math.random()} className="r-item languages0">{lang}</div>) : "" }
                        {item.tools? item.tools.map(tool =><div key={Math.random()} className="r-item tools">{tool}</div> ) : ""}
                        </div>
                        </div>
                
                </div>
                
                ))}
                </div>
        </div>
)
}
export default JobItems;