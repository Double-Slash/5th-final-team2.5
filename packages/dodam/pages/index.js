import { InputBox, Button } from '@dodam/components';
import TestParagraph from '@/components/TestParagraph';

export default function Home() {
  return (
    <div>
      <InputBox type="date" placeholder="placeholder text" />
      <Button>Click</Button>
      <TestParagraph />
    </div>
  );
}
