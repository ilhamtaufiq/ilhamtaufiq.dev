<template>
        <form @submit="addUser">
            <input type="text" name="nama" v-model="nama" placeholder="Nama">
            <input type="submit" value="Submit" class="btn btn-info">
        </form>
</template>

<script>
export default {
  name: "AddUserItem",
          props: ['editUser'],

        data () {
            return {
                nama: '',
                id: '',
                edit: false
            }
        },
        methods: {
            addUser(e){
                e.preventDefault();
                if (this.edit === false){
                    // add new book
                    const newUser = {
                        nama: this.nama,
                        id: Math.floor(Math.random() * 100)
                    };
                    if (newUser.nama !== ''){
                        this.$emit('add-user-event', newUser);
                    }
                    this.nama = ''
                }else{
                    //edit book
                    const userItem = {
                        nama: this.nama,
                        id: this.id
                    };
                    //send to parent (App.vue)
                    this.$emit('edit-user-event', userItem);
                    // clear input field
                    this.nama = '';
                    this.edit = false;
                }
            }
        },
        watch: {
            editUser: {
                handler() {
                    this.nama = this.editUser.nama;
                    this.id = this.editUser.id;
                    this.edit = true
                },
                deep: true
            },
            nama:{
                handler(){
                    if(this.nama === ''){
                        this.edit = false;
                    }
                }
            }
        }
}
</script>

<style scoped>
.login-form {
  padding: 2em;
  border: 1px solid #a8a8a8;
  border-radius: .5em;
  max-width: 500px;
  box-sizing: border-box;
}
.form-title {
  margin-top: 0;
}
.login-form::v-deep .formulate-input .formulate-input-element {
  max-width: none;
}
@media (min-width: 420px) {
  .double-wide {
    display: flex;
  }
  .double-wide .formulate-input {
    flex-grow: 1;
    width: calc(50% - .5em);
  }
  .double-wide .formulate-input:first-child {
    margin-right: .5em;
  }
  .double-wide .formulate-input:last-child {
    margin-left: .5em;
  }
}
</style>