
import './App.css'
import { GlobalContext } from './context/GlobalContext';

function App() {
  const posts = [
    {
      id: 1,
      title: "Titolo del Post",
      image: '',
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
      tags: ["html", "css"],
      published: true,
    },
    {
      id: 2,
      title: "Titolo del Post",
      image: '',
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
      tags: ["js", "css"],
      published: true,
    },
    {
      id: 3,
      title: "Titolo del Post",
      image: '',
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
      tags: ["js", "php"],
      published: true,
    },
    {
      id: 4,
      title: "Titolo del Post",
      image: '',
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
      tags: ["html"],
      published: false,
    },
  ];

  return (
    <>
      <h1>Post List</h1>
      <ul>

        {posts.map((posts) => (
          <li key={posts.id}>
            <h2>{posts.title}</h2>
            <p>{posts.content}</p>
            <p>{posts.tags.join(', ')}</p>
          </li>

        )
        )}

      </ul>
    </>
  )
}

export default App
