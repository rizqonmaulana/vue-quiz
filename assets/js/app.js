let app = new Vue({
    el: '#app', 
    data: {
        newPost: '',
        posts: [''],
        likes: [0],
        date: new Date().toJSON().slice(0,10).replace(/-/g,'/')
    },
    methods: {
        addPost: function () {
            this.posts.push(this.newPost);
            this.content = '';
        },
        removePost: function (index) {
            this.posts.splice(index,1)
        },
        like() {
            this.likes = 1;
        },
        dislike() {
        this.likes -= 1;
        }
    }
})