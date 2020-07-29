import React from "react";
import StockDetail from "./StockDetail";
import UnderlinedTabs from "./UnderlinedTabs";
import "./underlinedTabs.css";

const SinglePage = () => {
    return <>
        <StockDetail/>
        <UnderlinedTabs tabs={[{index: 1, content: "1일 짜리 그래프 그릴거야", title: "1일"},
                            {index: 2, content: "1주일 짜리 그래프 그릴거야", title: "1주"},
                            {index: 3, content: "1 짜리 그래프 그릴거야", title: "1달"},
                            {index: 4, content: "3달 짜리 그래프 그릴거야", title: "3달"},
                            {index: 5, content: "6달 짜리 그래프 그릴거야", title: "6달"},
                            {index: 6, content: "1년 짜리 그래프 그릴거야", title: "1년"},
                            {index: 7, content: "5년 짜리 그래프 그릴거야", title: "5년"},
                            {index: 8, content: "10년 짜리 그래프 그릴거야", title: "10년"}
        ]}/>
    </>
}

export default SinglePage;