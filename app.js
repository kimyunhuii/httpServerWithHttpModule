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

// 유저 회원가입(등록)
const createUser = (req, res) => {

  const {id, name, email, password} = req.body.data   // 구조분해할당
  console.log(user)

	users.push({id, name, email, password})

  console.log('after: ', users)

  res.json({ message: "USER_CREATED" })
}

// 게시글 등록하기
const createPost = (req, res) => {

  const {id, title, content, userId} = req.body.data
  console.log(posts)

	posts.push({id, title, content, userId})

  console.log('after: ', posts)

  res.json({ message: "POST_CREATED" })
}

// 게시글 목록 조회하기
const postList = (req, res) => {

  console.log(posts)

  res.json({posts})
}

// 개시글 수정하기
const postUpdate = (req, res) => {

}

// 개시글 삭제하기


// 유저와 게시글 조회하기


module.exports = { createUser, createPost , postList, postUpdate} // routing.js 에서 사용하기 위해 모듈로 내보낸다