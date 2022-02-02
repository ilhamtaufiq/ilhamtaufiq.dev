<template>
    <div>
        <h2>Users List</h2>
        <div v-bind:key="user.id" v-for="user in users">
            <UserItem v-bind:user="user" v-on:del-user-item="delUserMethod" v-on:edit-user-item="editUserMethod" />
        </div>
        <div v-if="!users.length">
            <p>No Users to Read!!</p>
        </div>
    </div>
</template>

<script>
    import UserItem from "./UserItem";
    export default {
        nama: "Users",
        props: ["users"],
        components: {
            UserItem
        },
        methods: {
            delUserMethod(id){
                //send to parent
                this.$emit('del-user-event', id);
            },
            editUserMethod(id){
                //send to parent (App.vue)
                this.$emit('edit-user-event', id)
            }
        }
    }
</script>

<style scoped>
</style>