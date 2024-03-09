<script>
    export let title;
    export let bio;
    export let extra = null;
</script>

<div class="lg:h-[83px] h-auto w-[100%] rounded-[13px] bg-white shadow-about-shadow">
    <div class="px-[20px] py-[16px] flex flex-col">
        <h1>{title}</h1>
        <div class="flex gap-1 detail pt-2 items-center">
            {bio}
            {#if extra}
            <span class="flex items-center">·</span>
            {extra}
            {/if}
        </div>
    </div>
</div>