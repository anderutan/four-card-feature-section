export default function Card({ title, description, img, color, css }) {
  return (
    <div
      className={`max-w-sm p-8 border-t-4 ${color} rounded-md shadow-2xl mb-8 md:mb-0 flex flex-col ${css}`}
    >
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-sm leading-6 text-grayish-blue mb-10'>{description}</p>
      <img src={img} alt='' className='w-14 self-end' />
    </div>
  );
}
