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

  return ( 
    <div>
      {datalist.map(item => (
                <div key={item.id} className={item.new && item.featured ? "JobItemList pseudo" : "JobItemList"}>
                  <div className='LeftItem'>
                      <img className="logo" src={item.logo} alt={item.company}/>
                      <div className='LeftItem-col'>
                      <div className="company">{item.company}
                      {item.new ? <span className='new'>NEW!</span> : ""}
                      {item.featured ? <span className='featured'>FEATURED</span> : ""}
                      </div>
                      <span className="position">{item.position}</span>
                        <div>
                      <ul className="bottomItem">
                        <li className="postedAt">{item.postedAt} &#183;</li>
                        <li className="contract">{item.contract} &#183;</li>
                        <li className="location">{item.location}</li>
                      </ul>
                        </div>
                        </div>
                      </div>
                      <div className="RightItem">
                        <ul>
                        <li className="role">{item.role}</li>
                        <li className="level">{item.level}</li>
                        {item.languages? item.languages.map(lang => <li className="languages0">{lang}</li>) : "" }
                        {item.tools? item.tools.map(tool =><li className="tools">{tool}</li> ) : ""}
                        </ul>
                        </div>
                
                </div>
                ))}
        </div>
)
}


// class JobItems extends Component {
//     constructor(props){
//         super(props);
//     this.state ={
//         list:[
            
//               {id: 1,
//               company: "Photosnap",
//               logo: <img src={photosnap} alt="photosnap"></img> ,
//               new: true,
//               featured: true,
//               position: "Senior Frontend Developer",
//               role: "Frontend",
//               level: "Senior",
//               postedAt: "1d ago",
//               contract: "Full Time",
//               location: "USA Only",
//               languages: ["HTML", "CSS", "JavaScript"],
//               tools: []
//             },
//               {
//                 id: 2,
//                 company: "Manage",
//                 logo : <img src={manage} alt="manage"></img>,
//                 new: true,
//                 featured: true,
//                 position: "Fullstack Developer",
//                 role: "Fullstack",
//                 level: "Midweight",
//                 postedAt: "1d ago",
//                 contract: "Part Time",
//                 location: "Remote",
//                 languages: ["Python"],
//                 tools: ["React"]
//               },
//               {
//                 "id": 3,
//                 "company": "Account",
//                 "logo": <img src={account} alt="account"></img>,
//                 "new": true,
//                 "featured": false,
//                 "position": "Junior Frontend Developer",
//                 "role": "Frontend",
//                 "level": "Junior",
//                 "postedAt": "2d ago",
//                 "contract": "Part Time",
//                 "location": "USA Only",
//                 "languages": ["JavaScript"],
//                 "tools": ["React", "Sass"]
//               },
//               {
//                 "id": 4,
//                 "company": "MyHome",
//                 "logo": <img src={myhome} alt="myhome"></img>,
//                 "new": false,
//                 "featured": false,
//                 "position": "Junior Frontend Developer",
//                 "role": "Frontend",
//                 "level": "Junior",
//                 "postedAt": "5d ago",
//                 "contract": "Contract",
//                 "location": "USA Only",
//                 "languages": ["CSS", "JavaScript"],
//                 "tools": []
//               },
//               {
//                 "id": 5,
//                 "company": "Loop Studios",
//                 "logo": <img src={loopstudios} alt="loopstudios"></img>,
//                 "new": false,
//                 "featured": false,
//                 "position": "Software Engineer",
//                 "role": "FullStack",
//                 "level": "Midweight",
//                 "postedAt": "1w ago",
//                 "contract": "Full Time",
//                 "location": "Worldwide",
//                 "languages": ["JavaScript"],
//                 "tools": ["Ruby", "Sass"]
//               },
//               {
//                 "id": 6,
//                 "company": "FaceIt",
//                 "logo": <img src={faceit} alt="faceit"></img>,
//                 "new": false,
//                 "featured": false,
//                 "position": "Junior Backend Developer",
//                 "role": "Backend",
//                 "level": "Junior",
//                 "postedAt": "2w ago",
//                 "contract": "Full Time",
//                 "location": "UK Only",
//                 "languages": ["Ruby"],
//                 "tools": ["RoR"]
//               },
//               {
//                 "id": 7,
//                 "company": "Shortly",
//                 "logo": <img src={shortly} alt="shortly"></img>,
//                 "new": false,
//                 "featured": false,
//                 "position": "Junior Developer",
//                 "role": "Frontend",
//                 "level": "Junior",
//                 "postedAt": "2w ago",
//                 "contract": "Full Time",
//                 "location": "Worldwide",
//                 "languages": ["HTML", "JavaScript"],
//                 "tools": ["Sass"]
//               },
//               {
//                 "id": 8,
//                 "company": "Insure",
//                 "logo": <img src={insure} alt="insure"></img>,
//                 "new": false,
//                 "featured": false,
//                 "position": "Junior Frontend Developer",
//                 "role": "Frontend",
//                 "level": "Junior",
//                 "postedAt": "2w ago",
//                 "contract": "Full Time",
//                 "location": "USA Only",
//                 "languages": ["JavaScript"],
//                 "tools": ["Vue", "Sass"]
//               },
//               {
//                 "id": 9,
//                 "company": "Eyecam Co.",
//                 "logo": <img src={eyecamco} alt="eyecamco"></img>,
//                 "new": false,
//                 "featured": false,
//                 "position": "Full Stack Engineer",
//                 "role": "Fullstack",
//                 "level": "Midweight",
//                 "postedAt": "3w ago",
//                 "contract": "Full Time",
//                 "location": "Worldwide",
//                 "languages": ["JavaScript", "Python"],
//                 "tools": ["Django"]
//               },
//               {
//                 "id": 10,
//                 "company": "The Air Filter Company",
//                 "logo": <img src={theairfiltercompany} alt="theairfiltercompany"></img>,
//                 "new": false,
//                 "featured": false,
//                 "position": "Front-end Dev",
//                 "role": "Frontend",
//                 "level": "Junior",
//                 "postedAt": "1mo ago",
//                 "contract": "Part Time",
//                 "location": "Worldwide",
//                 "languages": ["JavaScript"],
//                 "tools": ["React", "Sass"]
//               }
//             ],
//             };
//         };
   
//     render(){
//     return (

//         <div>
          
          
//                 {this.state.list.map(item => (
//                 <div key={item.id} className="JobItemList">
//                       <span className="logo">{item.logo}</span>
//                        <span className="company">{item.company}</span>
//                        <span className="position">{item.position}</span>
//                 <div>
//                 <ul className="RightItem">
//                         <li className="role">{item.role}</li>
//                         <li className="level">{item.level}</li>
//                         <li className="languages0">{item.languages[0]}</li>
//                         <li className="languages1">{item.languages[1]}</li>
//                         <li className="languages2">{item.languages[2]}</li>
//                         <li className="tools">{item.tools[0]}</li>
//                         <li className="tools">{item.tools[1]}</li>
//                         </ul>
//                         </div>
//                 <div >
//                   <ul className="bottomItem">
//                         <li className="postedAt">{item.postedAt}</li>
//                         <li className="contract">{item.contract}</li>
//                         <li className="location">{item.location}</li>
//                     </ul>
//                         </div>
                        
                    
//                     </div>
                    
//                 ))}
                
            
//         </div>
        
//     )
// }
// }




export default JobItems;