<script>
    import { url } from "@roxi/routify";
    import { user, loginWithGoogle, logout } from "./Auth.svelte";

    let _user;

    user.subscribe((v) => (_user = v));
</script>

<main
    class="w-full flex justify-between items-center bg-red-500 p-4 text-white"
>
    <div class="bg-white p-1 rounded-full">
        <a href={$url("../")}>
            <img class="w-8 h-8" src="/logo.png" alt="Logo" />
        </a>
    </div>
    {#if _user}
        <button on:click={logout}> Logout </button>
    {:else}
        <button on:click={loginWithGoogle}> Login </button>
    {/if}
</main>
