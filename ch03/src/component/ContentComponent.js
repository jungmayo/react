/*
    children
        - 부모 컴포넌트가 자식 컴포넌트 사이에 포함된 내용을 전달하는 특별한 props
        - 컴포넌트 사이에 포함된 태그 내용을 전달하는 특별한 props ({}) 중괄호 안에 넣어야 함, 꼭 children 이라고 변수명을 지정
*/

const ContentConponent = ({children}) => {


    return (
        <div className="ContentConponent">
            <h4>ContentConponent</h4>
            {children}
        </div>
    );
};

export default ContentConponent;