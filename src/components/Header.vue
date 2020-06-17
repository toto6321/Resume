<template>
    <div>
        <h3>{{title}}</h3>
        <p>{{content}}</p>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data: function () {
            return {
                title: "HOPE IS A GOOD THING",
                content: "It is the best of times, and it is the worst of times."
            }
        }
    }
</script>

<style scoped>

</style>