function Item(props) {
  return (
    <div key={props.name}>
      <img height={100} width={100} src={props.img} />
      <p>{props.name}</p>
    </div>
  );
}

export default Item;
