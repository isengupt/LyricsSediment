import { Meteor } from "meteor/meteor";
import { SongPoint } from '../../database/Points'

Meteor.methods({
    getDates: function() {
        let rangeDates = []
        let items = SongPoint.find({}).fetch()
        for (item of items) {
            if(rangeDates.includes(item.rootDate.toISOString())) {
                continue;
            }
            else {
                rangeDates.push(item.rootDate.toISOString())
            }
        }
        
        return rangeDates
          
    },
    
    getPoints: function() {
        let items = SongPoint.find({}).fetch()
          
        return items
    },

    getWordsDate: function(songInfo) {
        let rangeItems = []
        let items = SongPoint.find({}).fetch()  
        for (item of items) {
            if(songInfo.rootDate.toISOString() == item.rootDate.toISOString()) {
               rangeItems.push(item)
            }       
        }
        return rangeItems
    }



    
    
})