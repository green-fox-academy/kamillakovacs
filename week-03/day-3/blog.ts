//import {BlogPost} from "./domino";

class Blog  {
  blogPost: BlogPost; 
  
}

class BlogPost extends Blog {
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

