import { Input,Typography, Button, DatePicker } from '@dodam/components';


export default function Home() {
  return (
    
    <div>
      <div className="section">
      <div class="title"><Typography class="title" variant="Heading">회원가입</Typography></div>
      <Input label="아이디" type="text"/>
      <Input label="비밀번호" type="text"/>
      <Input label="비밀번호" type="text"/>
      <Input label="이름" type="text"/>
      <Typography className="label1">생년월일</Typography>
      <DatePicker selected={new Date()} onChange={(date) => console.log(date)} />
      <Input label="휴대폰 번호(-없이 입력하세요)" type="text"/>
     
      <Button fullWidth variant="secondary">가입하기</Button>
      
      
      </div>s
      <style jsx global>
      {`
      
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
      `}
  </style>
    </div>
    
  );
}
