import React from 'react';
import Mydata from '../storage/ASP-data1';
import Mydata2 from '../storage/ASP-data2'
import Mydata3 from '../storage/ASP-data3'
const ASP = () => {
  return (
    <div className="main-Dotnet-background">
      <div className= "title-Dotnet"><h1>Top 54 ASP.NET Interview Questions</h1></div>
      <p id="msg-Hover"><span id="s1">Hover</span> Over the List Below to View the <span id="s2">top 10 Most Important question</span></p>
        <div className='grid-maker'>
          <Mydata />
          <Mydata2 />
          <Mydata3 />
  
    </div>
    </div>
  );
};

export default ASP;

