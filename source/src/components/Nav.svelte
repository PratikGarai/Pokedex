<script>
    import {user, loginWithGoogle, logout} from "./Auth.svelte";
</script>

<main>
    <button on:click={loginWithGoogle}> Login With Google </button>
    <button on:click={logout}> Logout </button>
</main>