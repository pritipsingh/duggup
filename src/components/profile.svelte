<script>
  import Button from "./button.svelte";
  import Container from "./container.svelte";

  let title = "Follow";
</script>

<Container>
  <div class="flex  justify-between gap-[4vw] mt-[7vh]">
    <div class="flex absolute flex-col items-center justify-center">
        <img
        src="images/krishna.jpeg"
        alt="Krishna Kiran"
        width="120"
        height="120"
        class="rounded-full border-[5px]  border-[#EAEFF5] object-cover"
      />
      <p class="name text-center mt-2">Krishna <br /> Kiran</p>
    </div>
    <div class="flex lg:flex-col ml-[160px] justify-between gap-6 p-4">
      <div class="flex justify-between flex-row">
        <p class="lg:w-[70%] w-full">
          Co-Founder and CEO at Duggup - Social network for people in tech.
          Ex-Amazon Head of Engineering. I write hot-takes on building a
          business, shipping delightful products and accelerating product and
          career growth.
        </p>
        <div class="flex flex-col gap-1">
          <img
            src="images/duggupprogress.svg"
            alt="duggup logo"
            class="w-[36px] h-[36px] lg:self-end"
          />
          <h2 class="lg:self-end">Duggup</h2>
          <p class="detail lg:self-end">Co-Founder and CEO</p>
        </div>
      </div>

      <div class="flex justify-between ">
        <span><Button {title} /></span>
        <div class="flex items-center gap-2 justify-end">
          <p class="icon self-center">My Website</p>
          <span class="cursor-pointer self-center"
            ><img src={"images/icons/link.svg"} /></span
          >
          <span class="cursor-pointer pl-2 self-center"
            ><img src={"images/icons/menu.svg"} /></span
          >
        </div>
      </div>

    </div>
  </div></Container
>
