<template>
    <div>
        <form @submit="addBook">
            <input type="text" name="title" v-model="title" placeholder="Add Book">
            <input type="text" name="nama" v-model="nama" placeholder="Nama">
            <input type="submit" value="Submit" class="btn btn-info">
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddBookItem",
        props: ['editBook'],
        data () {
            return {
                title: '',
                                nama: '',

                id: '',
                edit: false
            }
        },
        methods: {
            addBook(e){
                e.preventDefault();
                if (this.edit === false){
                    // add new book
                    const newBook = {
                        title: this.title,
                                                nama: this.nama,

                        id: Math.floor(Math.random() * 100)
                    };
                    if (newBook.title !== ''){
                        this.$emit('add-book-event', newBook);
                    }
                    this.title = ''
                                        this.nama = ''

                }else{
                    //edit book
                    const bookItem = {
                        title: this.title,
                                                nama: this.nama,

                        id: this.id
                    };
                    //send to parent (App.vue)
                    this.$emit('edit-book-event', bookItem);
                    // clear input field
                    this.title = '';
                                        this.nama = '';

                    this.edit = false;
                }
            }
        },
        watch: {
            editBook: {
                handler() {
                    this.title = this.editBook.title;
                                        this.nama = this.editBook.nama;

                    this.id = this.editBook.id;
                    this.edit = true
                },
                deep: true
            },
            title:{
                handler(){
                    if(this.title === ''){
                        this.edit = false;
                    }
                }
            }
        }
    }
</script>

<style scoped>
</style>