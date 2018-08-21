class BlogPost {
  authorName: string;
  title: string;
  text: string;
  publicationDate: string;
  constructor(authorName: string, title: string, text: string, publicationDate: string) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.publicationDate = publicationDate;
  }
}

class Blog {
  blogPost: BlogPost;
  constructor() {
    this.blogPost = new ArrayList<>();
  }
  add(blogPost: BlogPost): void {
    blogPost.add()
  }
}
