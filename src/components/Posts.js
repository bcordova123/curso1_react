import React, { Component } from 'react'

//Compoenente para extraer datos externos

export default class Posts extends Component {

    state = {
        posts : []
    }

    //Metodo se ejecuta cuando el componente es montado o cargado
    async componentDidMount() {
        const response =await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        this.setState({ posts: data})
        console.log(data);
    }

    //Pintar elementos en pantalla
    render() {
        return (
            <div>
                <h1>Component Post</h1>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}


