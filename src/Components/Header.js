import React from "react";

import { styled } from "styled-components";
import { usetodoState } from "./Reducer";

const HeaderBlock = styled.div`
    h1{
        margin: 0;
        color : gray;
    }

    .day{
        margin-top: 4px;
        color: lightgray;
    }
`
function Header(){
    const today = new Date(); // 오늘 날짜

    const dateString = today.toLocaleString('ko-KR',{ // 날짜 값을 받을 때는 int 를 사용하지 않고 numeric long numeric 을 사용한다.
        year :'numeric',
        month: 'long',
        day : 'numeric'
    });
    const todos = usetodoState();
    const undoneTask = todos.filter(todo => !todo.done);
    const dayName = today.toLocaleDateString('ko-KR',{weekday:'long'});

    return(
        <>
            <h1>2023년 8월 2일{dateString}</h1>
            <div className="day">수요일 {dayName}</div>
            <div>할 일 : {todos}</div>
        </>
    );
}

export default HeaderComponent;