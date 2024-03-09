<script>
import {content} from '../lib/stores/session'

  import Button from "./button.svelte";
  import Container from "./container.svelte";

  import {userToFollow} from '../data/users'
  import { onMount } from "svelte";

  function handleClick() {
  $content = $content === 'Follow' ? 'Followed' : 'Follow';// This line is actually not needed since $content is auto-subscribed

 
}


</script>

<Container>
  <div class="flex  justify-between gap-[4vw]   mt-[7vh]">
    <div class="flex absolute flex-col flex-wrap items-center justify-center">
        <img
        src="images/krishna.jpeg"
        alt="Krishna Kiran"
        width="120"
        height="120"
        class="rounded-full border-[5px]  border-[#EAEFF5] object-cover"
      />
      <p class="name text-center mt-2 whitespace-pre-line">{userToFollow.firstName}<br/>{userToFollow.secondName}</p>
    </div>
    <div class="flex flex-col lg:ml-[160px] ml-[140px] justify-between gap-6 p-4">
      <div class="flex justify-between flex-col lg:flex-row relative">
        <p class="lg:w-[70%] w-full">
          {userToFollow.bio}
        </p>
        <div class="flex flex-row-reverse lg:flex-col gap-1 mt-4 lg:mt-0 lg:static absolute right-0 bottom-[-6vh] self-end">
          <img
            src="images/duggupprogress.svg"
            alt="duggup logo"
            class="w-[36px] h-[36px] lg:self-end"
          />
          <div class="flex flex-col gap-1">
          <h2 class="self-end">{userToFollow.company}</h2>
          <p class="detail self-end">{userToFollow.position}</p>
        </div>
        </div>
      </div>

      <div class="flex lg:justify-between mt-[3vh] lg:mt-0 justify-between gap-5 lg:gap-0">
        <span on:click={handleClick}><Button title={$content} /></span>
        <div class="flex items-center gap-2 justify-end">
          <a href={userToFollow.website} class="flex items-center gap-2 ">
            <p class="icon self-center">My Website</p>
            <span class="cursor-pointer self-center"
              ><img src={"images/icons/link.svg"} /></span
            >
          </a>
         
          <span class="cursor-pointer pl-2 self-center"
            ><img src={"images/icons/menu.svg"} /></span
          >
        </div>
      </div>

    </div>
  </div></Container
>
