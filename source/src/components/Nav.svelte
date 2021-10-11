<script>
    import { user, loginWithGoogle, logout } from "./Auth.svelte";

    let _user;

    user.subscribe((v) => (_user = v));
</script>

<main
    class="w-full flex justify-between items-center bg-red-500 p-4 text-white"
>
    {#if _user}
        <button on:click={logout}> Logout </button>
    {:else}
        <button on:click={loginWithGoogle}> Login With Google </button>
    {/if}
</main>
