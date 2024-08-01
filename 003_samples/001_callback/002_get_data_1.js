const http = require("http");

// GET /users/:id/posts
// GET /posts/:id/comments
// PUT /comments/:id

const HOSTNAME = "jsonplaceholder.typicode.com";
const PORT = 80;
const USER_ID = 1;

const genericRequest = (additionalOptions, onEnd = null) => {
  const { body, ...requestOptions } = additionalOptions;

  const options = {
    hostname: HOSTNAME,
    port: PORT,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    ...requestOptions,
  };
  const req = http.request(options, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      // console.log(`Response from server: ${data}`);
      parseData = JSON.parse(data);
      onEnd && onEnd(parseData);
    });
    req.on("error", (error) => {
      console.error("Ошибка запроса:", error);
    });
  });
};

const getUserPosts = (userId, onEnd = null) => {
  const options = {
    path: `/user/${userId}/posts`,
    method: "GET",
  };
  genericRequest(options, onEnd);
};
const getPostComments = (postId, onEnd = null) => {
  const options = {
    path: `/posts/${postId}/comments`,
    method: "GET",
  };
  genericRequest(options, onEnd);
};
const updateCommentBody = (commentId, newBody, onEnd = null) => {
  const options = {
    path: `/comments/${commentId}`,
    method: "PUT",
    body: JSON.stringify({
      body: newBody,
    }),
  };
  genericRequest(options, onEnd);
};
getUserPosts(USER_ID, function (posts) {
  console.log(posts[0]);
  getPostComments(posts[0].id, function (comments) {
    console.log(comments[0]);
    updateCommentBody(
      comments[0].id,
      "New text for comment",
      function (updateComment) {
        console.log(updateComment);
      }
    );
  });
});
