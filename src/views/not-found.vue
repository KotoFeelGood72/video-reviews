<template>
           <div class="not-found">
                <h1>Not found!</h1>
                <h2>404</h2>
                <router-link to="/">Back home</router-link>
            </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    .not-found {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        flex-direction: column;

        h1 {
            font-size: 30px;
        }
        h2 {
            font-size: 150px;
            margin: 20px 0 70px 0;
        }
        a {
            background-color: rgba(255, 255, 255, 0.13);
            border-radius: 8px;
            display: block;
            padding: 14px 60px;
            font-size: 20px;
            text-decoration: none;
            color: white;
            transition: all .3s ease;
            &:hover {
                background-color: rgba(255, 255, 255, 0.301);
            }
        }
    }
</style>