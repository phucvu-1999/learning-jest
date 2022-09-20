interface Props {
  name?: string;
  className?: string;
}

const Greet = (props: Props) => {
  const { name = "Hello", className = "greet" } = props;
  return (
    <div className={className}>
      {name}
      Hello my name is Tien Phuc
    </div>
  );
};

export default Greet;
