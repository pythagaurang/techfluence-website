import React from 'react';

const Rules = (props) =>{
    return(
        <div class="container">
            <h4><b>General Rules</b></h4>
            <ol type="disc">
                <li></li>
            </ol>
            <h4><b>Participation Rules</b></h4>
            <ol type="disc">
                <li><b>If participating as a College.</b>
                    <ol>
                        <li><p>Free entry.</p></li>
                        <li><p>No. of teams depends on the event.</p></li>
                        <li><p>If a college gets both first and second place, points will be awarded to the college as per the points system and winner will be awarded with prizes and certificates.</p></li>
                    </ol>
                </li>
                <li><b>If participating as a Department.</b>
                     <ol>
                        <li><p>Free entry.</p></li>
                        <li><p>No. of teams depends on the event.</p></li>
                        <li><p>If a department gets both first and second place, points will be awarded as per the points system and winner will be awarded with prizes and certificates.</p></li>
                    </ol></li>
                <li><b>If participating as an individual.</b>
                    <ol>
                        <li><p>Free entry.</p></li>
                        <li><p>If an individual gets first or second plae then winner will be awarded with prizes and certificates.</p></li>
                    </ol></li>
            </ol>
        </div>
    )
}

export default Rules