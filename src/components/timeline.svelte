<script>
  import About from "./about.svelte";
import Card from "./card.svelte";
import Container from "./container.svelte";


  const data = [
    {
        type: "Card",
        date: "Dec 2023",
        data: [
            {
                image: "images/person.jpeg",
        para: "No amount of technology can convert a bad story into a good story.",
            },
            {
                image: "images/sam.jpeg",
        para: "Most people don't have original ideas. Here is how Sam Altman pushes himself to have...",
       
            }
        ]
       

    },
    {
        type: "position",
        title: "Co-Founder and CEO",
        bio: "Full-time",
        extra: "Remote",
        company: "Duggup",
        logo: "images/duggupprogress.svg",
        area: "San Francisco Bay Area",
        joined: "Nov 2023"

    },
    {
        type: "Card",
        date: "Dec 2023",
        data: [
            {
                image: "images/computer.jpeg",
        para: "Startup Lesson I am reflecting. Don't build for the \"average person\".",
       
            },
            {
                image: "images/map.png",
        para: "Your biggest regrets at 80 will be acts of omission.",
   
            }
        ]
       
    },
    {
        type: "position",
        title: "VP Engineering",
        bio: "Full-time",
        company: "Better Up",
        logo: "images/betterup.svg",
        area: "San Francisco Bay Area",
        joined: "Sep 2022"
    }
  ]


</script>

<Container>

<div class="max-w-full  mt-[5vh] ml-[1vw] lg:ml-0 p-10 relative left-[60px]  border-l-2 border-dotted border-[#778FB1] ">
    <div class="flex flex-col gap-[10vh] w-[100%] lg:w-[90%]">
       
            {#each data as item}

                {#if item.type === "Card"}
                <div class="grid lg:grid-cols-2 max-w-[80%]  cursor-pointer grid-cols-1  gap-[25px] place-items-center place-content-between">
                    {#each item.data as i}
                  
                        <span class="absolute detail break-words lg:left-[-68px] left-[-53px] md:left-[-68px]">{item.date}</span>
                    <img src={"images/icons/cardicon.svg"} alt="pointer" class="absolute w-[16px] left-[-9px]"/>
                    <div class="w-[100%] md:w-[344px] lg:w-[100%]   lg:max-w-full">
                        <Card image= {i.image} para={i.para}/>
                    </div>
                     
               
                     {/each}
                </div>
                 
                 
                     {:else if item.type === "position"}
                    
                     <div class="flex items-center w-[100%]  max-w-[80%] justify-center">
                        <img src={"images/icons/arrowup.svg"} alt="pointer" class="relative h-[6px] left-[-47px] bottom-[10vh] z-[999]"/>
                     

                       
                        <div class="absolute detail lg:left-[-150px] left-[-53px] md:left-[-72px] ">
                            <div class="flex flex-col relative justify-center">
                            <div class="absolute items-end flex gap-1 flex-col">
                            <img src={item.logo} alt={item.company} class="w-[48px]"/>
                            <h2 class="lg:whitespace-nowrap text-right">{item.company}</h2>
                            <div class="lg:whitespace-nowrap text-right">{item.area}</div>
                            <div>Joined</div>
                            <div>{item.date}</div>
                        </div>

                        </div>
                        </div>
                        
                        <img src={"images/icons/abouticon.svg"} alt="pointer" class="absolute w-[28px] left-[-15px]"/>
                        <div class="w-[100%] md:w-[344px] lg:w-[100%] ">
                         <About  title={item.title} bio={item.bio} extra={item.extra} />
                        </div>
                     </div>
                   
                       
              
                          {/if}
            {/each}

  

    </div>
</div>

</Container>