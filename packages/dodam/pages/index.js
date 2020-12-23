import { InputBox, Button, DatePicker } from '@dodam/components';
import TestParagraph from '@/components/TestParagraph';

export default function Home() {
  return (
    <div>
      <InputBox type="text" placeholder="placeholder text" />
      <DatePicker selected={new Date()} onChange={(date) => console.log(date)} />
      <Button>Click</Button>
      <TestParagraph />
    </div>
  );
}
