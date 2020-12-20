import { InputBox, Button } from '@dodam/components';

export default function Home() {
  return (
    <div className="title">
      <div className="container">
        <InputBox type="text" placeholder="placeholder text" />
        <Button>Click</Button>
      </div>
      <style jsx>
        {`
          .container {
            padding: 8px;
          }
        `}
      </style>
    </div>
  );
}
