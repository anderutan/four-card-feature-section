export default function Card({ title, description, img, color }) {
  return (
    <div className={`p-6 border-t-4 border-${color}-400`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={img} alt='' />
    </div>
  );
}
