import { Link, useSearchParams } from "react-router-dom";
import useCates from "../../hooks/useCates";
import { useEffect, useState } from "react";
import { getArticle } from "../../api/articleAPI";
import Pagenation from "./Pagenation";

const initState = {
  dtoList: [],
  cate: "",
  pg: 1,
  size: 10,
  total: 0,
  startNo: 0,
  start: 0,
  end: 0,
  prev: false,
  next: false,
  type: null,
  keyword: null,
};

export default function List() {
  const [cate1, cate2] = useCates();
  const [data, setData] = useState(initState);

  const [searchParams] = useSearchParams();
  const pg = searchParams.get("pg") || 1; //pg가 있으면 그 값으로 아니면 1로 초기화

  //한번만 실행되기때문에 업데이트 될 때마다 호출시켜줘야 함 (cate2가 바뀔때마다 실행되도록 []안에 cate2를 넣어야 함)
  useEffect(() => {
    const fetchData = async () => {
      const data = await getArticle(cate2, pg);
      console.log(data);

      //서버에서 받아온 setData 상태초기화
      setData(data);
    };
    fetchData();
  }, [cate2, pg]); // cate2가 변경될 때마다 useEffect가 실행

  return (
    <section className="list">
      <nav>
        <form action="#">
          <input
            type="text"
            name="search"
            placeholder="제목 키워드, 글쓴이 검색"
          />
          <input type="submit" value="검색" />
        </form>
      </nav>
      <h1>글목록</h1>

      <table border="0">
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>글쓴이</th>
          <th>날짜</th>
          <th>조회</th>
        </tr>
        {data.dtoList.map((article, index) => (
          <tr key={index}>
            <td>{data.startNo - index}</td>
            <td>
              <Link to={`/board/view?cate1=${cate1}&cate2=${cate2}`}>
                {article.title}[{article.comment}]
              </Link>
            </td>
            <td>{article.writer}</td>
            <td>{article.regDate}</td>
            <td>{article.hit}</td>
          </tr>
        ))}
      </table>

      <Pagenation data={data} cate1={cate1} cate2={cate2} />

      <Link
        to={`/board/write?cate1=${cate1}&cate2=${cate2}`}
        className="btn btnWrite"
      >
        글쓰기
      </Link>
    </section>
  );
}
