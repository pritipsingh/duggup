<script>
    
    export let title;
    export let icon = null;

   
</script>

<button class="border-[0.5px] outline-none rounded-[4px] transition-colors duration-200 shadow-custom-gray border-[#4D4D4D] hover:bg-[#0066FF] hover:text-white hover:shadow-hoverShadow bg-white icon px-[16px] h-[36px]">
    <div class="flex gap-3">
        {#if icon}
    <img src={icon} alt={`${title}`} />
  {/if}
  {title}
    </div>
</button>