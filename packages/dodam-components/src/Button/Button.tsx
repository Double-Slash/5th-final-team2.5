export interface ButtonProps {
  handleChange: () => void;
}

function Button(props: ButtonProps) {
  return (
    <button type="button" className="button">
      Test
      <style jsx>
        {`
          .button {
            font-weight: bold;
          }
        `}
      </style>
    </button>
  );
}

export default Button;
