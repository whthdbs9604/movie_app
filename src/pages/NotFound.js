import { useNavigate } from "react-router-dom"

export default function NotFound() {
    const navigate = useNavigate();

    return(
        <div className="page-container error">
            <div className="box">
                <div className="not">NOT FOUND</div>
                <div className="number">4<span>0</span>4</div>
                <div className="desc">해당 페이지를 찾지 못했습니다.</div>
                <div className="desc">주소가 잘못되었거나 더이상 제공괴지 않는 페이지 입니다.</div>
                <div className="button" onClick={() => navigate('/')}>메인 페이지로 이동</div>
            </div>
        </div>
    )
}