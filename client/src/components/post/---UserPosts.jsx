import usePagination from "../../hooks/usePagination"
import usePostContext from "../../hooks/usePostContext"
import Post from "./Post"

const Posts = () => {
  const { isLoading, userPosts, userPage, hasMoreUserPages, changeUserPage } = usePostContext();

  const targetRef = usePagination(isLoading, userPage, hasMoreUserPages, changeUserPage)

  return (
    userPosts?.map((post, i) =>
      <Post
        key={post._id}
        {...post}
        ref={userPosts.length === i + 1 ? targetRef : null}
      />
    )
  )
}
export default Posts