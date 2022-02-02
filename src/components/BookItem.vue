<template>
    <div class="float-left">
<div class="md:container md:mx-auto">            
    {{book.title}}
    {{book.nama}}
    <i class="glyphicon glyphicon-pencil" @click="$emit('edit-book-item', book.id)">edit</i>
    <i class="glyphicon glyphicon-trash" @click="$emit('del-book-item', book.id)">delete</i>
</div>
    </div>
</template>

<script>
    export default {
        name: "BookItem",
        props: ["book"]
    }
</script>

<style scoped>
    .glyphicon-pencil, .glyphicon-trash{
        font-size: 15px;
        padding: 4px;
    }
</style>