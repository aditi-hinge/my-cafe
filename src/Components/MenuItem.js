export default function MenuItem({ item }) {
  return (
    <div>
      <button>
        {item.name} {item.price}
      </button>
    </div>
  );
}
