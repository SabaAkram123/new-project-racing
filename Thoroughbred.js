import React from 'react';
import races from "./races";
import "./App.css";
function Thoroughbred1 (){
    return(
        <div className= "Thoroughbred-race">
            <h1> upcoming Thoroughbred races</h1>
            <races Venue_name= "urawa" race_number="1" Advertised_start_time="1:30pm"/>
            <races Venue_name="Nagoya" race_number="2"  Advertised_start_time="2:30pm"/>
        
            <races Venue_name="Wagga"  race_number="3"  Advertised_start_time="3:30pm"/>
            <races Venue_name= "Busan"  race_number="4"  Advertised_start_time="4:30pm"/>
            <races Venue_name="Cambridge" race_number="5" Advertised_start_time="5:30pm" />
        </div>
    );
}
export default Thoroughbred1;