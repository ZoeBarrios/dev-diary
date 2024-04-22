import HeartCheckBox from "./HeartCheckBox";
export default function Review({ review }) {
  return (
    <article
      key={review.id}
      className="bg-white p-5 shadow-lg rounded-lg w-2/4 border border-2 border-tertiary shadow-xlexit
      "
    >
      <div
        className={`bg-white flex flex-row justify-between ${
          review.id % 2 == 0 ? "text-text" : "text-text-secondary"
        }`}
      >
        <h2 className="text-2xl font-bold self-center">{review.title}</h2>
        <div className="flex gap-3">
          <i className="fa-solid fa-minus text-lg"></i>
          <i className="fa-regular fa-square text-lg"></i>
          <i className="fa-solid fa-x text-lg"></i>
        </div>
      </div>
      <hr className="my-3" />
      <p>{review.body}</p>
      <div
        className={`flex flex-row justify-between mt-5 ${
          review.id % 2 == 0 ? "text-text" : "text-text-secondary"
        }`}
      >
        <div className="flex flex-row gap-3">
          <HeartCheckBox />
          {review.categories.map((category) => (
            <span
              key={category}
              className="bg-primary font-bold px-2 py-1 rounded-lg"
            >
              <span className="">{category}</span>
            </span>
          ))}
        </div>
        <span className="font-bold">{review.date}</span>
      </div>
    </article>
  );
}
