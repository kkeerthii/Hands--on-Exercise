import React from "react";

export default function EvenPlayers([, second, , fourth, , sixth]) {

    return (
        <ul>
            <li>Second : {second}</li>
            <li>Fourth : {fourth}</li>
            <li>Sixth : {sixth}</li>
        </ul>
    );

}