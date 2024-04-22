import Review from "./Review";

const reviews = [
  {
    id: 1,
    title: "React Hooks",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    categories: ["Frontend", "React"],
    date: "2021-07-20",
  },
  {
    id: 2,
    title: "Node.js",
    body: "Fusce bibendum dapibus lectus. Suspendisse potenti. In elementum ante eget risus. Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.",
    categories: ["Backend", "Node.js"],
    date: "2021-08-05",
  },
  {
    id: 3,
    title: "UI/UX Design",
    body: "Vestibulum pharetra risus sed velit. Nunc ac magna. Maecenas odio dolor, vulputate vel, auctor ac, accumsan id, felis. Pellentesque cursus sagittis felis. Pellentesque porttitor, velit lacinia egestas auctor, diam eros tempus arcu, nec vulputate augue magna vel risus.",
    categories: ["UI/UX", "Design"],
    date: "2021-09-15",
  },
  {
    id: 4,
    title: "Vue.js",
    body: "Nam accumsan ipsum nec risus. Sed arcu lectus, auctor sed, ultricies et, ultrices eget, ipsum. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada.",
    categories: ["Frontend", "Vue.js"],
    date: "2021-10-10",
  },
  {
    id: 5,
    title: "Python",
    body: "Quisque ullamcorper placerat ipsum. Cras nibh. Morbi vel justo vitae lacus tincidunt ultrices. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    categories: ["Backend", "Python"],
    date: "2021-11-02",
  },
  {
    id: 6,
    title: "Data Science",
    body: "Vivamus in erat ut urna cursus vestibulum. Phasellus gravida semper nisi. Cras id dui. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Mauris nec risus ut libero dignissim dapibus. Nulla facilisi.",
    categories: ["Data", "Machine"],
    date: "2021-12-20",
  },
];

export default function ListOfReviews() {
  return (
    <section className="flex flex-col gap-5 p-5 h-full items-center mt-16">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </section>
  );
}
