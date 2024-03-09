<script>
  import { onMount } from "svelte";
  import Button from "./button.svelte";

    let items = [
    { title: 'Home', icon: 'images/icons/home.svg', link1: "/" },
    { title: 'Explore', icon: 'images/icons/explore.svg', link1: "/" },
    { title: 'Learn', icon: 'images/icons/learn.svg' , link1: "/"},
  ];

  const title = "Post"
  const icon = 'images/icons/post.svg'

  let isNavbarVisible = false;


function toggleNavbar() {
  isNavbarVisible = !isNavbarVisible;
}

function removeToggle(){
    isNavbarVisible = false; 
}
onMount(() => {

  window.addEventListener("resize", removeToggle); // Adjust on screen resize

 return () => window.removeEventListener("resize", removeToggle);
});




</script>
<nav class="w-[85vw] flex items-center duration-300 delay-75 transition-transform  justify-between z-[9999] bg-[#FCFCFF] max-w-[1424px] sticky top-0 mx-auto h-[73px] p-[10px] border-b-[1px] border-dotted  border-[#525C69]">

        <div>
            <img src={'images/logo.svg'} alt={"duggup"} />        
        </div>
        <button on:click={toggleNavbar} class="lg:hidden rotate-90 cursor-pointer rounded-md">
            |||
        </button>
        
        {#if isNavbarVisible === true}
        <div class=" absolute top-[5vh] z-[999] detail right-0 cursor-pointer" on:click={removeToggle}>X</div>
        
            
        {/if}
        
        <div class="lg:flex lg:flex-row lg:gap-[3vw] icon lg:items-center   {isNavbarVisible ? "flex flex-col gap-[7vh] rounded-lg justify-center items-center absolute  top-0 overflow-hidden right-0 w-[100vw] h-[100vh] bg-[#FCFCFF]" : "hidden" }">
            <div class="flex gap-[2vw]  {isNavbarVisible ? "flex-col" : "flex-row"}">
                {#each items as {title, icon, link1}}
                <a href={link1}>
                <div class="flex items-center gap-3">
                <img src={icon} alt={title} class="icon" />
                <p class="icon">{title}</p>
                </div></a>
                {/each}
            </div>
      
            <Button {title} {icon}/>
  
            
            <div class="flex items-center gap-[0.5vw]">
                <img src={'images/krishna.jpeg'} alt={`Krishna Kiran`} class="w-[46px] h-[46px] rounded-[50%] border-[0.5px] border-[#4D4D4D] object-cover" />
                <p class="navname">Krishna Kiran</p>
                <img src={"images/icons/down.svg"} alt={title} class="icon" />

            </div>
   
    </div>

</nav>