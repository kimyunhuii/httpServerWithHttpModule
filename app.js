// app.js
const util = require('util')

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
  const lastUser = users[users.length-1].id

  const {name, email, password} = req.body.data   // 구조분해할당
  console.log(user)

  if(lastUser){
    users.push({id : lastUser++,
      name, 
      email, 
      password
    })
  }else{
    users.push({id : 1,
      name, 
      email, 
      password
    })
  }
	

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

  const postWithUserName =  posts.map( (post)=>{
    post.userId
    const user = users.find((user) => post.userId === user.id)

    return{
      ...post,
      userName: user.name
    }
  });

  res.json({data : postWithUserName})
}

// 개시글 수정하기
const postUpdate = (req, res) => {
  const { id, content } = req.body;

  const postNumber = posts.find((post) => post.id === id);  // 함수 알고 쓰기.. {post.id === id} 이렇게 적었다가 undefined 에러..
  const user = users.find((user) => postNumber.userId === user.id);
  const newPost = {
    id: postNumber.id,
    title: postNumber.title,
    content: content,
    userId: postNumber.userId,
    userName: user.name
  };

  res.json({data : newPost});
}

// 개시글 삭제하기
const postDelete = (req, res) => {
  const { id } = req.body;

  posts.forEach((el, index) => {
    if(el.id === id ){
      posts.splice(index, 1)
    }
  })
  console.log("posts : "+ util.inspect(posts))
  res.json({message : "postingDeleted"});
}

// 유저와 게시글 조회하기
const userPost = (req, res) => {
  const { id } = req.body;

  const user = users.find((user) => id === user.id);
  
  const posting = [];
  const data = users.forEach((el, index) => {
    if(el.id === id ){
      posts.forEach((ele, index2) => 
        {if(ele.userId === id){
          posting[index2] = {
            postingId      : ele.id,
	          postingName    : ele.title,
			      postingContent : ele.content
          };
        }
      })
    }
  })

  const newPost = {
    userID  : user.id,
	  userName : user.name,
    postings : posting
  };
  res.json({data : newPost})
}

module.exports = { createUser, createPost , postList, postUpdate, postDelete, userPost} // routing.js 에서 사용하기 위해 모듈로 내보낸다