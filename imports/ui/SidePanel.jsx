import React, { useState, useEffect } from 'react';





const SidePanel = (songInfo, setHighlights ) => {
console.log(setHighlights)
    useEffect(() => {
        if (songInfo.songInfo != null) {
        Meteor.call("getWordsDate",songInfo.songInfo, (e, r) => {
          console.log(e);
          if (!e) {
            console.log(e);
            if (r) {
              console.log(r);
              (r) => setHighlights(r)
            }
          }
        });
    }
      }, [songInfo]);



 if (songInfo.songInfo == null) {
    return (
      <div className="side-panel">
No song selected
      </div>
    );
 } 
 
 

     return (
         <div className="side-panel">
            <div className="side-item"> Title: {songInfo.songInfo.title}  </div> 
            <div className="side-item"> Published: {songInfo.songInfo.pubDate.toISOString()}  </div>
            <a href = {songInfo.songInfo.url} className="side-item"> Genius Link</a>
            <div className="side-item"> Lyrics: {songInfo.songInfo.lyrics}  </div>
            {
                songInfo.songInfo.keywords.length > 1 ? 
                songInfo.songInfo.keywords.map((keyword) => 
                <div>

                    {keyword.phrase}
                </div>
                ) :
                <>

                </>


            }
         </div>
     )
 
  



  



};

export default SidePanel;
