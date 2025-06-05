<script>

</script>

<style lang="css" scoped>

nav {
    background-color: hsla(0, 0%, 0%, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    height: 36px;
    align-items: center;
}

</style>

<template>
    <nav>
        <a href="/" class="flex items-center justify-center ml-1">
            <span class="sr-only">Home</span>
            <Icon name="bx:home" size="20" />
        </a>
        <a href="https://github.com/trutrix/commander.tools" class="flex items-center justify-center ml-1" target="_blank">
            <span class="sr-only">Github</span>
            <Icon name="codicon:github" size="20" />
        </a>
    </nav>
</template>