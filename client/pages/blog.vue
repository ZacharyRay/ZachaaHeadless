<template>
    <div>
        <h1>Blog</h1>
        <section class="blog-posts">
            {{ blogArchive }}
        </section>
    </div>
</template>

<script>
    export default {
        layout: 'homepage',
        name: 'blog',
        data() {
            return {
                blogArchive: []
            }
        },
        methods: {
            async getBlogPosts() {
                const results = ''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>