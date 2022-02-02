<template>
    <div class="float-left">
<div class="md:container md:mx-auto">            
    {{user.nama}}
    <i class="glyphicon glyphicon-pencil" @click="$emit('edit-user-item', user.id)">edit</i>
    <i class="glyphicon glyphicon-trash" @click="$emit('del-user-item', user.id)">delete</i>
</div>
    </div>
</template>

<script>
    export default {
        nama: "UserItem",
        props: ["user"]
    }
</script>

<style scoped>
    .glyphicon-pencil, .glyphicon-trash{
        font-size: 15px;
        padding: 4px;
    }
</style>