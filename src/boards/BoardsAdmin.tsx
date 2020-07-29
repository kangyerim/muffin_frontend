import React from "react";
import { Table, Button } from "react-bootstrap";
import "./boards.css";

const BoardsAdmin = () => {

    return <>
        <Table responsive className="board_table">
            <thead>
            <tr className="schema">
                <th>번호</th>
                <th>날짜</th>
                <th>카테고리</th>
                <th>상담내용</th>
                <th>고객명</th>
                <th>다운로드</th>

            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>2020-07-23</td>
                <td>펀드</td>
                <td>펀드 상품 매매</td>
                <td>김희진</td>
                <td>
                    <button> 상담 내용.txt </button>
                    <button> 제출한 서류1.pdf </button>
                    <button> 제출한 서류2.pdf </button>
                </td>


            </tr>
            <tr>
                <td>2</td>
                <td>2020-07-23</td>
                <td>펀드</td>
                <td>펀드 상품 매매</td>
                <td>강예림</td>
                <td>
                    <button> 상담 내용.txt </button>
                    <button> 제출한 서류1.pdf </button>
                    <button> 제출한 서류2.pdf </button>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>2020-07-23</td>
                <td>주식</td>
                <td>주식 매도</td>
                <td>최윤정</td>
                <td>
                    <button> 상담 내용.txt </button>
                    <button> 제출한 서류1.pdf </button>
                    <button> 제출한 서류2.pdf </button>
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>2020-07-23</td>
                <td>펀드</td>
                <td>펀드 상품 매매</td>
                <td>김희진</td>
                <td>
                    <button> 상담 내용.txt </button>
                    <button> 제출한 서류1.pdf </button>
                    <button> 제출한 서류2.pdf </button>
                </td>


            </tr>
            <tr>
                <td>5</td>
                <td>2020-07-23</td>
                <td>펀드</td>
                <td>펀드 상품 매매</td>
                <td>강예림</td>
                <td>
                    <button> 상담 내용.txt </button>
                    <button> 제출한 서류1.pdf </button>
                    <button> 제출한 서류2.pdf </button>
                </td>
            </tr>
            <tr>
                <td>6</td>
                <td>2020-07-23</td>
                <td>주식</td>
                <td>주식 매도</td>
                <td>최윤정</td>
                <td>
                    <button> 상담 내용.txt </button>
                    <button> 제출한 서류1.pdf </button>
                    <button> 제출한 서류2.pdf </button>
                </td>
            </tr>
            <tr>
                <td>7</td>
                <td>2020-07-23</td>
                <td>펀드</td>
                <td>펀드 상품 매매</td>
                <td>김희진</td>
                <td>
                    <button> 상담 내용.txt </button>
                    <button> 제출한 서류1.pdf </button>
                    <button> 제출한 서류2.pdf </button>
                </td>


            </tr>
            <tr>
                <td>8</td>
                <td>2020-07-23</td>
                <td>펀드</td>
                <td>펀드 상품 매매</td>
                <td>강예림</td>
                <td>
                    <button> 상담 내용.txt </button>
                    <button> 제출한 서류1.pdf </button>
                    <button> 제출한 서류2.pdf </button>
                </td>
            </tr>
            <tr>
                <td>9</td>
                <td>2020-07-23</td>
                <td>주식</td>
                <td>주식 매도</td>
                <td>최윤정</td>
                <td>
                    <button> 상담 내용.txt </button>
                    <button> 제출한 서류1.pdf </button>
                    <button> 제출한 서류2.pdf </button>
                </td>
            </tr>
            <tr>
                <td>10</td>
                <td>2020-07-23</td>
                <td>주식</td>
                <td>주식 매도</td>
                <td>최윤정</td>
                <td>
                    <button> 상담 내용.txt </button>
                    <button> 제출한 서류1.pdf </button>
                    <button> 제출한 서류2.pdf </button>
                </td>
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

export default BoardsAdmin