import React from "react";
import { Table, Button } from "react-bootstrap";

const Board = () => {
    return <>
            <tr className="board_input">
                <th><h2>게시판의 제목이 들어갑니다</h2></th>
                <th><h5>상담사 | 강예림</h5></th>
                <th><h5>상담 날짜 | 2020-07-23</h5></th>
            </tr>
        <div className="board_input">
        <p className="input_text">
            오면 하나의 가득 새겨지는 때 별 이 까닭입니다. 잔디가 어머니 둘 없이 헤일 있습니다. 강아지, 별이 그러나 어머니, 다하지 봄이 있습니다. 무덤 애기 아침이 가난한 하나에 그리고 하나에 남은 듯합니다. 멀듯이, 나의 이름을 오면 별 하나에 봅니다. 노루, 내 소녀들의 거외다. 못 어머니, 릴케 버리었습니다.

            차 된 남은 이름과, 새겨지는 벌써 말 써 있습니다. 별들을 나의 언덕 마리아 헤는 쓸쓸함과 것은 우는 거외다. 토끼, 피어나듯이 하나에 까닭입니다. 벌레는 이름을 별 토끼, 하나의 파란 너무나 슬퍼하는 거외다. 하나에 없이 둘 헤는 밤이 이름과, 위에 이름자 멀리 계십니다.

            아직 피어나듯이 별 별 프랑시스 부끄러운 잠, 있습니다. 없이 어머니, 그러나 버리었습니다. 어머님, 이름과, 봄이 아스라히 청춘이 듯합니다. 불러 프랑시스 벌레는 지나고 같이 풀이 내 별 덮어 봅니다. 어머님, 비둘기, 강아지, 별 그리고 쉬이 이름을 무성할 버리었습니다. 토끼, 프랑시스 시와 못 그리워 별 벌레는 아무 봅니다. 둘 이름과, 이런 하나 가난한 까닭입니다.
        </p>
        <tr>
            <td>첨부 된 파일 :</td>
            <td><a> 상품 소개서.pdf </a></td>
            <td><a> 상품 계약서 사본.pdf</a></td>
        </tr>
        <tr>
            <td><Button>목록으로</Button></td>
            <td></td>
            <td className="buttons"><Button>이전 게시글</Button><Button>다음 게시글</Button></td>
        </tr>
        </div>
    </>
}

export default Board;
