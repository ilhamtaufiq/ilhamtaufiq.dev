<template>
  <div id="app">
    <AddUserItem v-on:add-user-event="addUserItem" v-on:edit-user-event="editUserItemEvent" v-bind:editUser="editUser"/>
    <div>
      <Users v-bind:users="users" v-on:del-user-event="deleteUserItem" v-on:edit-user-event="editUserItem" />
    </div>
  </div>
</template>

<script>
import Users from "~/components/Users";
import AddUserItem from "~/components/AddUser";
export default {
  name: 'App',
  components: {
    Users,
    AddUserItem
  },
  data () {
    return {
      users: [],
      editUser: {
        nama: '',
        id: ''
      }
    }
  },
  methods: {
    addUserItem(newUser){
      // console.log('newbook', newBook.title);
        this.users = [...this.users, newUser];
      // this.books.unshift(newBook)
    },
    deleteUserItem(id){
      this.users = this.users.filter(user => user.id !== id);
    },
    editUserItem(id){
      //find the index of the book's id
      let objIndex = this.users.findIndex(obj=> obj.id === id);
            this.editUser.nama = this.users[objIndex].nama;

      this.editUser.id = id;
    },
    editUserItemEvent(userItem){
      //find the index of this id's object
      let objIndex = this.users.findIndex(obj => obj.id === userItem.id)
      //update the item
      this.users[objIndex].nama = userItem.nama;
    }
  },
  watch: {
    users: {
      handler() {
        localStorage.setItem('users',JSON.stringify(this.users))
      },
      deep: true
    }
  },
  mounted() {
    if (localStorage.getItem("users")){
      this.users = JSON.parse(localStorage.getItem("users"))
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>