<script>

</script>

<style lang="css" scoped>

nav {
    background-color: hsla(0, 0%, 0%, 0.15);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    height: 46px;
    align-items: center;
    color: hsla(0, 0%, 100%, 0.25);
}

</style>

<template>
    <nav>
        <a href="/" class="flex items-center justify-center ml-2">
            <span class="sr-only">Home</span>
            <Icon name="codicon:home" size="32" />
        </a>
        <a href="https://github.com/trutrix/commander.tools" class="flex items-center justify-center ml-4" target="_blank">
            <span class="sr-only">Github</span>
            <Icon name="codicon:github" size="32" />
        </a>
    </nav>
</template>