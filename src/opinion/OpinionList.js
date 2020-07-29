import React from "react";
import { Link } from "react-router-dom";
import './opinionList.css';

const OpinionList = () => {

    return <>
        <table>
            <tr>
                <td><h2 className={"text-2xl"}>게시글 리스트</h2></td>
                <td><select className="form-select">
                    <option>5개씩 보기</option>
                    <option>10개씩 보기</option>
                    <option>20개씩 보기</option>
                </select></td>
                <td><button className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded register_btn"><Link to="opinionRegister">글쓰기</Link></button></td>
            </tr>
        </table>
        <div className="w-full p-4 mb-4 rounded-lg bg-white border border-grey-100 dark:bg-dark-95 dark:border-dark-90">
            <table className="table">
                <thead>
                <tr>
                    <th>게시글 번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>등록한 날짜</th>
                    <th>조회수</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>RUS</td>
                    <td><Link to="opinionDetail">Russian Federation</Link></td>
                    <td>Россия</td>
                    <td>Moscow</td>
                    <td>146</td>
                </tr>
                <tr>
                    <td>DEU</td>
                    <td><Link to="opinionDetail">Germany</Link></td>
                    <td>Deutschland</td>
                    <td>Berlin</td>
                    <td>81</td>
                </tr>
                <tr>
                    <td>FRA</td>
                    <td><Link to="opinionDetail">France</Link></td>
                    <td>France</td>
                    <td>Paris</td>
                    <td>66</td>
                </tr>
                <tr>
                    <td>GBR</td>
                    <td><Link to="opinionDetail">United Kingdom of Great Britain</Link></td>
                    <td>United Kingdom</td>
                    <td>London</td>
                    <td>93</td>
                </tr>
                <tr>
                    <td>ITA</td>
                    <td><Link to="opinionDetail">Italy</Link></td>
                    <td>Italia</td>
                    <td>Rome</td>
                    <td>51</td>
                </tr>
                <tr>
                    <td>ESP</td>
                    <td><Link to="opinionDetail">Spain</Link></td>
                    <td>España</td>
                    <td>Madrid</td>
                    <td>22</td>
                </tr>
                <tr>
                    <td>UKR</td>
                    <td><Link to="opinionDetail">Ukraine</Link></td>
                    <td>Україна</td>
                    <td>Kiev</td>
                    <td>42</td>
                </tr>
                <tr>
                    <td>POL</td>
                    <td><Link to="opinionDetail">Poland</Link></td>
                    <td>Polska</td>
                    <td>Warsaw</td>
                    <td>38</td>
                </tr>
                </tbody>
            </table>
            <div className="page_nation">
                <div className="flex flex-wrap items-center justify-start space-x-2 pagination">
                    <button
                        className="btn btn-default bg-transparent hover:bg-grey-200 text-grey-900 dark:text-white">Previous
                    </button>
                    <button className="btn btn-circle bg-transparent hover:bg-grey-200 text-grey-900 dark:text-white">1</button>
                    <button className="btn btn-circle bg-transparent hover:bg-grey-200 text-grey-900 dark:text-white">2</button>
                    <button className="btn btn-circle bg-transparent hover:bg-grey-200 text-grey-900 dark:text-white">3</button>
                    <button className="btn btn-circle bg-transparent hover:bg-grey-200 text-grey-900 dark:text-white">4</button>
                    <button className="btn btn-circle bg-blue-500 hover:bg-blue-600 text-white">5</button>
                    <button className="btn btn-circle bg-transparent hover:bg-grey-200 text-grey-900 dark:text-white">6</button>
                    <button className="btn btn-circle bg-transparent hover:bg-grey-200 text-grey-900 dark:text-white">7</button>
                    <button className="btn btn-circle bg-transparent hover:bg-grey-200 text-grey-900 dark:text-white">8</button>
                    <button className="btn btn-circle bg-transparent hover:bg-grey-200 text-grey-900 dark:text-white">9</button>
                    <button className="btn btn-circle bg-transparent hover:bg-grey-200 text-grey-900 dark:text-white">10
                    </button>
                    <button className="btn btn-default bg-transparent hover:bg-grey-200 text-grey-900 dark:text-white">Next
                    </button>
                </div>
                <div className="relative"><input type="search" name="search" placeholder="검색어를 입력하세요"
                                                 className="pl-10 pr-5 appearance-none h-10 w-full rounded-full text-sm focus:outline-none"/>
                    <button type="submit" className="absolute top-0 mt-3 left-0 ml-4">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                             stroke-linecap="round" stroke-linejoin="round" className="stroke-current h-4 w-4"
                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    </>
}

export default OpinionList;
