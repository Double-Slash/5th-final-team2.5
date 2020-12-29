import { Input,Typography, Button, DatePicker } from '@dodam/components';

export default function Home() {
  return (
    <div>
      <div className="section">
      <div class="title"><Typography class="title" variant="Heading">로그인</Typography></div>
      <Input type="text" placeholder="아이디를 입력하세요" />
      <Input type="text" placeholder="비밀번호를 입력하세요" />
      <Button fullWidth >로그인</Button>
      <div className="sub"><Typography><p><span>아이디/비밀번호 찾기 </span><span>|</span><span> 회원가입</span></p></Typography></div>
      <div class="hr-sect">또는</div>
      
      <Button fullWidth className="kakao">Kakao로 계속</Button>
      </div>
      <style jsx global>
      {`
      p{
        text-align: center;
        font-size:12px;
        color:#505050;
        margin-bottom:70px;
      }
      .sub{
        text-align:center;
        justify-content:center;
      }
      .section{
        margin:34px;
      }
      .title{
        font-size:24px;
        font-weight: bold;
        justify-content:center;
        text-align:center;
        margin-top:60px ;
        margin-bottom: 35px; 
        
      }
      .label1{
        font-size:12px;
        color:#CDCDCD;
      }
      Button{
        margin-top:36px;
        margin-bottom:10px;
      }
      .kakao{
        margin-top:19px;
        color:#505050;
      }
      .hr-sect {
        display: flex;
        flex-basis: 100%;
        align-items: center;
        color: #BBBBBB;
        font-size: 12px;
       
      }
      .hr-sect::before,
      .hr-sect::after {
        content: "";
        flex-grow: 1;
        background: #BBBBBB;
        height: 1px;
        font-size: 0px;
        line-height: 0px;
        margin: 0px 8px;
      }
      `}
  </style>
    
    </div>
  );
}
