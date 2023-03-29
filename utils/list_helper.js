const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((a, b) => +a + +b.likes, 0)
}

const favoriteBlog = (blogs) => {
  if (blogs.length > 0) {
    const favBlog = blogs.find(
      (blog) => blog.likes === Math.max(...blogs.map((o) => o.likes))
    )
    return {
      title: favBlog.title,
      author: favBlog.author,
      likes: favBlog.likes,
    }
  }
  return 'empty list'
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
}
