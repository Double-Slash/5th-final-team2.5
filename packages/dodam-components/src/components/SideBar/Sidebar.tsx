import React from 'react';

// TODO: 네비게이션에 맞는 이미지 설정 + background-color gui에 맞게 수정
export interface SidebarProps extends React.HTMLAttributes<HTMLHeadElement> {
  title: string;
}
const Sidebar = React.forwardRef<HTMLHeadElement, SidebarProps>((props, ref) => {
  const { title, ...rest } = props;

  return (
    <div  className="sidenav">
   <style jsx>
        {`
         .sidenav {
width: 260px;
height: 640px;
 position: fixed;
 z-index: 1;
 top: 0px;
left: 0px;
padding:15px;



          }
          
  
             .profile-image {
            background: #EDEDED 0% 0% no-repeat padding-box;
              opacity: 1;
             width: 66px;
             
height: 66px;
              border-radius: 50%;
              margin: 10px;
            }
            .sidebar-line{
                border: 1px solid #CDCDCD;
                text-align:center;
                margin:8px;
            }
            .list-group-item{
               border:none;
               margin:5px;
                 font-weight:bold;
    
            }
            span{
                font-size:14px;
              
            }
        `}
      </style>
       <img className="profile-image" />
       <span>
              로그인이 필요합니다
            </span>
            <i className='fas fa-angle-right'></i>
     
       <hr className="sidebar-line"/>
<ul className="list-group">
  <li className="list-group-item">홈</li>
  <li className="list-group-item">맞춤 동아리 테스트</li>
   <li className="list-group-item">동아리 등록</li>
  <li className="list-group-item">등록한 게시물</li>
  <li className="list-group-item">스크랩 동아리</li>
  <li className="list-group-item">고객센터</li>
   <li className="list-group-item">로그인</li>
</ul>
</div>
  );
});

export default Sidebar;
