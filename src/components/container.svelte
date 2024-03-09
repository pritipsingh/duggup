<script>
    export let id;

</script>

<section {id} class="flex  max-w-[100vw]  md:w-[80vw] lg:w-[70vw] mx-auto flex-col px-4">
    <div class="flex flex-col flex-1 ">
        <slot />
    </div>
</section>