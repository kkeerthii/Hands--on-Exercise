import React from "react";
import Post from "./Post";

class Posts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    loadPosts() {

    const posts = [
        new Post(
            1,
            "Healthy Lifestyle",
            "Maintaining a healthy lifestyle involves eating nutritious food, exercising regularly, staying hydrated, and getting enough sleep."
        ),

        new Post(
            2,
            "Technology in Everyday Life",
            "Technology has transformed the way people communicate, learn, work, and entertain themselves, making daily tasks more efficient."
        ),

        new Post(
            3,
            "Importance of Education",
            "Education empowers individuals with knowledge and skills, helping them build successful careers and contribute to society."
        ),

        new Post(
            4,
            "Protecting the Environment",
            "Simple actions such as reducing plastic use, recycling waste, conserving water, and planting trees can make a positive impact on the environment."
        ),

        new Post(
            5,
            "Travel and Exploration",
            "Traveling to new places allows people to experience different cultures, meet new people, and create unforgettable memories."
        ),

        new Post(
            6,
            "Time Management",
            "Planning your day, setting priorities, and avoiding distractions can improve productivity and reduce stress."
        )
    ];

    this.setState({
        posts: posts
    });
    }

    componentDidMount() {
        this.loadPosts();
    }

    render() {
    return (
        <div>
            <h1>Blog Posts</h1>

            {
                this.state.posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                ))
            }

        </div>
    );
    }

    componentDidCatch(error, info) {
        alert(error);
    }
}

export default Posts;