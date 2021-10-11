<script context="module">
    import { initAuth } from "./../auth/index.js";
    
    export const { user, loginWithGoogle, logout } = initAuth();

    user.subscribe((v) => {
        console.log("User : ", v);
    });
</script>
