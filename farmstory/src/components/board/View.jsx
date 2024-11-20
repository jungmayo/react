import { Link } from "react-router-dom";

export default function View() {
  return (
    <section className="view">
                        <h1>글보기</h1>
                        <table border="0">                            
                            <tr>
                                <th>제목</th>
                                <td><input type="text" name="title" value="제목입니다." readOnly/></td>
                            </tr>
                            <tr>
                                <th>파일</th>
                                <td>
                                    <p><a href="#">2021년 상반기 매출현황.xls</a>&nbsp;<span>7</span>회 다운로드</p>
                                    <p><a href="#">교육 운영 관리자료.hwp</a>&nbsp;<span>7</span>회 다운로드</p>
                                </td>
                            </tr>
                            <tr>
                                <th>내용</th>
                                <td>
                                    <textarea name="content" readonly>내용 샘플입니다.</textarea>
                                </td>
                            </tr>                    
                        </table>
                        
                        <div>
                        <Link to={`/board/delete?cate1=${cate1}&cate2=${cate2}`} className="btn btnRemove">삭제</a>
                        <Link to={`/board/modify?cate1=${cate1}&cate2=${cate2}`} className="btn btnModify">수정</a>
                        <Link to={`/board/list?cate1=${cate1}&cate2=${cate2}`} className="btn btnList">목록</a>
                        </div>
        
                        <section className="commentList">
                            <h3>댓글목록</h3>                   
        
                            <article>
                                <span className="date">2024-05-20</span>
                                <span className="nick">길동이</span>
                                <p className="content">댓글 샘플 입니다.</p>                        
                                <div>
                                    <Link to={`/board/modify?cate1=${cate1}&cate2=${cate2}`} className="remove">삭제</Link>
                                    <Link to={`/board/modify?cate1=${cate1}&cate2=${cate2}`} className="modify">수정</Link>
                                </div>
                            </article>
        
                            <p className="empty">등록된 댓글이 없습니다.</p>
        
                        </section>
        </section>
  );
}