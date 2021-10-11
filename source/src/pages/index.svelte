<script>
    import { metatags } from "@roxi/routify";
    import { Auth } from "../components";
    import { loginWithGoogle } from "../components/Auth.svelte";

    metatags.title = "Pokedex";
    metatags.description =
        "A Pokedex application made using Svelte and Firebase";
</script>

<main>
    <p>Hello</p>
    <Auth />
    <button
        on:click={loginWithGoogle}
    >
        Login WIth Google
    </button>
</main>
