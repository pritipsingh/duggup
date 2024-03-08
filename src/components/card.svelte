<script>
  import { onMount } from "svelte";

    export let image;
    export let para;


    let wordLimit = 13;

    function truncateText(text, limit) {
    const words = text.split(' ');

    // Check if the text exceeds the limit
    if (words.length > limit) {
   
        return words.slice(0, limit).join(' ') + '...';
    } else {
      
        return text;
    }
}

function updateWordLimit(){
    console.log(window.innerWidth)
    if(window.innerWidth >= 1000 && window.innerWidth <= 1200){
        wordLimit = 8
    }else{
        wordLimit = 13
    }
    
}

console.log(wordLimit)

onMount(() => {
    updateWordLimit();
    window.addEventListener('resize', updateWordLimit)

    return () => window.removeEventListener('resize', updateWordLimit)
})

</script>
<div class="w-full lg:max-w-[344px] h-auto lg:h-[226px] overflow-hidden rounded-[12px] bg-white border-[0.5px] border-[#D0D5DD]">
    <div class="flex flex-col .detail">
        <img src={image} alt={"blogs's cover picture"} class="w-full h-[136px] object-cover"/>
        <p class="p-[24px] w-full text-wrap text-left">{truncateText(para, wordLimit)}</p>
        
    </div>

</div>