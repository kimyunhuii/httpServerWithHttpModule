// app.js

const users = [
  {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Fabian Predovic",
    email: "Connell29@gmail.com",
    password: "password",
  },
];

const posts = [
  {
    id: 1,
    title: "간단한 HTTP API 개발 시작!",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 2,
    title: "HTTP의 특성",
    content: "Request/Response와 Stateless!!",
    userId: 1,
  },
];

const createUser = (req, res) => {

  const {id, name, email, password} = req.body.data   // 구조분해할당
  console.log(user)

	users.push({id, name, email, password})

  console.log('after: ', users)

  res.json({ message: "USER_CREATED" })
  // express 덕분에 JSON.stringify 함수를 사용할 필요없이
  // response 객체의 json 메소드를 활용한다
  
}

const createPost = (req, res) => {

  const {id, title, content, userId} = req.body.data
  console.log(posts)

	posts.push({id, title, content, userId})

  console.log('after: ', posts)

  res.json({ message: "USER_CREATED" })
  
}

module.exports = { createUser, createPost } // routing.js 에서 사용하기 위해 모듈로 내보낸다