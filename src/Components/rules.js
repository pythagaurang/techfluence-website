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
                    </ol>
                </li>
            </ol>
            <h4><b>Points System</b></h4>
            <ol type="disc">
            <li><b>Priority 1</b>
                <ol><li><p>UXplorer</p></li>
                    <li><p>Invasion</p></li>
                    <li><p>Code It</p></li>
                </ol>
            </li>
            <li><b>Priority 2</b>
                <ol><li><p>Let the Design Speak</p></li>
                    <li><p>Brain Wars</p></li>
                    <li><p>Forager</p></li>
                </ol>
            </li>
            <li><b>Priority 3</b>
                    <ol><li><p>Photography</p></li>
                        <li><p>Meme on It </p></li>
                    </ol>
            </li>
            </ol>
            <div className="container points">
            <table className="points-table">
                <tbody>
                    <tr>
                        <td><b>Events Type</b></td>
                        <td><b>First Place</b></td>
                        <td><b>Second Place</b></td>
                    </tr>
                    <tr>
                        <td>Priority 1</td>
                        <td>200 points</td>
                        <td>100 points</td>
                    </tr>
                    <tr>
                        <td>Priority 2</td>
                        <td>150 points</td>
                        <td>75 points</td>
                    </tr>
                    <tr>
                        <td>Priority 3</td>
                        <td>75 points</td>
                        <td>50 points</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Rules