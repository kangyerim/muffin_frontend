import React from "react";
import { Link } from "react-router-dom";
import "./opinionDetail.css";

const OpinionDetail = () => {

    return <>
        <table className="whole_table">
            <tr className="table_head">
                <td className="text-lg text-grey-500">324</td>
                <td className="text-2xl">오피니언의 게시글 제목이 들어 가는 부분입니다.</td>
                <td className="text-lg text-grey-500">비트생성기</td>
                <td className="text-lg text-grey-500">2020.07.29</td>
                <td className="text-lg text-grey-500">조회수 84</td>
            </tr>
            <tr>
                <td colSpan={5}>
                    <span>
                        <div className="w-full mb-4">
                            <p className="w-full mb-4">
                                집값 문제로 온 나라가 뜨겁다. 최근 몇 년 사이 20평형 아파트 값이 수억 원 올랐단다. 영혼까지 끌어 모아 집을 사야 한다며 젊은 세대들도 ‘내 집 마련 전쟁’에 뛰어들고 있다. 정권의 위기라는 얘기까지 나올 지경이다. 지난 7월 10일 다주택자들에 대한 세금 강화 처방이 먼저 나왔고, 주택공급 방안들도 곧 발표될 것 같다. 집값 문제 어떻게 풀어야 할까?
                                집값은 증후와 같다. 사람 몸의 체온이 올라 열이 나는 이유가 있듯 집값을 오르게 하는 원인이 있기에 집값이 오른다. 집값을 잡겠다며 ‘대증요법’으로 풀 게 아니다. 근본원인을 밝혀내고 국토정책, 도시정책, 주택정책 같은 ‘정책’으로 풀어야 한다. 가장 먼저 바로잡고 실행해야 할 게 ‘국토정책’이다.</p>
                       <p> 집값 상승의 근본 원인은 수도권 과밀이다. 극심한 편중과 불균형 때문이다. 1975년 당시 수도권에는 전체 인구의 약 31.5%가 살았고, 비수도권 기초지방자치단체 인구는 대부분 5만 명 이상이었다. 2019년 말 수도권 인구는 전체 인구의 과반을 넘겼고, 인구 5만 명도 안 되는 기초지자체 수도 크게 늘었다. 특별시와 광역시의 자치구를 뺀 전국 기초지자체 152곳 가운데 51곳(33.5%)이 인구 5만 명 미만이고 그나마 인구가 점점 더 줄고 있다. 지방소멸 위기가 코앞으로 다가왔다는 얘기다. 수도권에는 사람이 너무 많아 주택문제 등 도시문제가 가중되고, 지방은 사람이 너무 없어 소멸을 앞두고 있다.
                           대한민국 국토를 사람 몸에 비유한다면 머리는 너무 커져 터지기 직전인데 반해, 손끝 발끝에는 피가 돌지 않아 괴사 직전인 셈이다. 어떡해야 할까? 손발 다 잘라내고 머리만 키워 건강히 오래오래 살 수 있을까?</p>
                            <p>
                                집값 문제로 온 나라가 뜨겁다. 최근 몇 년 사이 20평형 아파트 값이 수억 원 올랐단다. 영혼까지 끌어 모아 집을 사야 한다며 젊은 세대들도 ‘내 집 마련 전쟁’에 뛰어들고 있다. 정권의 위기라는 얘기까지 나올 지경이다. 지난 7월 10일 다주택자들에 대한 세금 강화 처방이 먼저 나왔고, 주택공급 방안들도 곧 발표될 것 같다. 집값 문제 어떻게 풀어야 할까?
                                집값은 증후와 같다. 사람 몸의 체온이 올라 열이 나는 이유가 있듯 집값을 오르게 하는 원인이 있기에 집값이 오른다. 집값을 잡겠다며 ‘대증요법’으로 풀 게 아니다. 근본원인을 밝혀내고 국토정책, 도시정책, 주택정책 같은 ‘정책’으로 풀어야 한다. 가장 먼저 바로잡고 실행해야 할 게 ‘국토정책’이다.</p>
                       <p> 집값 상승의 근본 원인은 수도권 과밀이다. 극심한 편중과 불균형 때문이다. 1975년 당시 수도권에는 전체 인구의 약 31.5%가 살았고, 비수도권 기초지방자치단체 인구는 대부분 5만 명 이상이었다. 2019년 말 수도권 인구는 전체 인구의 과반을 넘겼고, 인구 5만 명도 안 되는 기초지자체 수도 크게 늘었다. 특별시와 광역시의 자치구를 뺀 전국 기초지자체 152곳 가운데 51곳(33.5%)이 인구 5만 명 미만이고 그나마 인구가 점점 더 줄고 있다. 지방소멸 위기가 코앞으로 다가왔다는 얘기다. 수도권에는 사람이 너무 많아 주택문제 등 도시문제가 가중되고, 지방은 사람이 너무 없어 소멸을 앞두고 있다.
                           대한민국 국토를 사람 몸에 비유한다면 머리는 너무 커져 터지기 직전인데 반해, 손끝 발끝에는 피가 돌지 않아 괴사 직전인 셈이다. 어떡해야 할까? 손발 다 잘라내고 머리만 키워 건강히 오래오래 살 수 있을까?</p>
                        </div>
                    </span>
                </td>
            </tr>
            <tr>
                <td className="keywords">
                    <span className="badge badge-sm bg-red-700 text-red-100 rounded-lg">삼성카드</span>
                    <span className="badge badge-sm bg-red-700 text-red-100 rounded-lg">토스</span>
                    <span className="badge badge-sm bg-red-700 text-red-100 rounded-lg">카카오</span>
                    <span className="badge badge-sm bg-red-700 text-red-100 rounded-lg">한국은행</span>
                </td>
            </tr>
        </table>

        <button className="btn btn-default bg-transparent hover:bg-blue-50 text-blue-500 hover:text-blue-600 btn-rounded btn-raised go_back"><Link to="opinionList">돌아가기</Link></button>
    </>
}

export default OpinionDetail;
