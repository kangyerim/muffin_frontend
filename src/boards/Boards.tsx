import React from "react";
import { Table, Button } from "react-bootstrap";
import "./boards.css";

const Boards = () => {

    return <>
        <Table responsive className="board_table">
            <thead>
            <tr className="schema">
                <th>번호</th>
                <th>제목</th>
                <th>상담사</th>
                <th>날짜</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>2020년 7월 21일 제안서입니다.</td>
                <td>최윤정</td>
                <td>2020-07-23</td>

            </tr>
            <tr>
                <td>2</td>
                <td>2020년 7월 21일 포트폴리오 입니다.</td>
                <td>김희진</td>
                <td>2020-07-23</td>
            </tr>
            <tr>
                <td>3</td>
                <td>2020년 7월 21일 첨부자료</td>
                <td>강예림</td>
                <td>2020-07-23</td>
            </tr>
            <tr>
                <td>4</td>
                <td>2020년 7월 21일 제안서입니다.</td>
                <td>최윤정</td>
                <td>2020-07-23</td>

            </tr>
            <tr>
                <td>5</td>
                <td>2020년 7월 21일 포트폴리오 입니다.</td>
                <td>김희진</td>
                <td>2020-07-23</td>
            </tr>
            <tr>
                <td>6</td>
                <td>2020년 7월 21일 첨부자료</td>
                <td>강예림</td>
                <td>2020-07-23</td>
            </tr>
            <tr>
                <td>7</td>
                <td>2020년 7월 21일 제안서입니다.</td>
                <td>최윤정</td>
                <td>2020-07-23</td>

            </tr>
            <tr>
                <td>8</td>
                <td>2020년 7월 21일 포트폴리오 입니다.</td>
                <td>김희진</td>
                <td>2020-07-23</td>
            </tr>
            <tr>
                <td>9</td>
                <td>2020년 7월 21일 첨부자료</td>
                <td>강예림</td>
                <td>2020-07-23</td>
            </tr>
            <tr>
                <td>10</td>
                <td>2020년 7월 21일 첨부자료</td>
                <td>강예림</td>
                <td>2020-07-23</td>
            </tr>
            </tbody>
        </Table>
        <div className="pagination">
        <Button variant="primary"> 1 </Button>{' '}
        <Button variant="primary"> 2 </Button>{' '}
        <Button variant="success"> 3 </Button>{' '}
        <Button variant="primary"> 4 </Button>{' '}
        <Button variant="primary"> 5 </Button>{' '}
        <Button variant="primary"> 다음 </Button>
        </div>
    </>
}

export default Boards