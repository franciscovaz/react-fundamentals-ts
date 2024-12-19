import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/franciscovaz.png',
      name: 'Francisco Vaz',
      role: 'Software Engineer'
    },
    content: [
      {type: 'paragraph', content: 'Hey guys 👋'},
      {type: 'paragraph', content: 'I finished another project, added already to my portfolio. 🚀'}    ,
      {type: 'link', content: 'jane.design/doctorcare'}
    ]
    ,
    publishedAt: new Date('2024-12-02 23:00:00')
  },
]


export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  post={post}
                />
              )
            })
          }
        </main>
      </div>
    </>
  )
}


