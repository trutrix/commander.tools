<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <Navbar />
    <h1 class="text-3xl font-bold mb-4">Commander Tools</h1>
    <NuxtLink to="/luck-bobblehead" class="mb-4" >
      <UButton class="w-80 md:w-50 h-12" color="primary" label="Luck Bobblehead" />
    </NuxtLink>
    <NuxtLink to="/coin-flipper">
      <UButton class="w-80 md:w-50 h-12" color="secondary" label="Coin Flipper"/>
    </NuxtLink>
  </div>
</template>