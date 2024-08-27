const Card = (props) => {
  const { title = "" } = props;
  return (
    <div className="border p-4 h-72 w-auto sm:w-52">
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
};

export default Card;
