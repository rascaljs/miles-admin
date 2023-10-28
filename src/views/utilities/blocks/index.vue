<script setup lang="ts">
const block8 = ref(` <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div class="text-center mb-5">
        <img src="/demo/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">
        <div class="  font-medium mb-3">Welcome Back</div>
        <span class=" font-medium line-height-3">Don't have an account?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
    </div>

    <div>
        <label for="email1" class="block  font-medium mb-2">Email</label>
        <InputText id="email1" type="text" class="w-full mb-3" />

        <label for="password1" class="block  font-medium mb-2">Password</label>
        <InputText id="password1" type="password" class="w-full mb-3" />

        <div class="flex align-items-center justify-content-between mb-6">
            <div class="flex align-items-center">
                <Checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></Checkbox>
                <label for="rememberme1">Remember me</label>
            </div>
            <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
        </div>

        <Button label="Sign In" icon="pi pi-user" class="w-full"></Button>
    </div>
 </div>`);

const block9 = ref(` <div class="surface-section">
    <div class="font-medium   mb-3">Movie Information</div>
    <div class=" mb-5">Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.</div>
    <ul class="list-none p-0 m-0">
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class=" w-6 md:w-2 font-medium">Title</div>
            <div class=" w-full md:w-8 md:flex-order-0 flex-order-1">Heat</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class=" w-6 md:w-2 font-medium">Genre</div>
            <div class=" w-full md:w-8 md:flex-order-0 flex-order-1">
                <Chip label="Crime" class="mr-2"></Chip>
                <Chip label="Drama" class="mr-2"></Chip>
                <Chip label="Thriller"></Chip>
            </div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class=" w-6 md:w-2 font-medium">Director</div>
            <div class=" w-full md:w-8 md:flex-order-0 flex-order-1">Michael Mann</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class=" w-6 md:w-2 font-medium">Actors</div>
            <div class=" w-full md:w-8 md:flex-order-0 flex-order-1">Robert De Niro, Al Pacino</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
            </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
            <div class=" w-6 md:w-2 font-medium">Plot</div>
            <div class=" w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                A group of professional bank robbers start to feel the heat from police
                when they unknowingly leave a clue at their latest heist.</div>
            <div class="w-6 md:w-2 flex justify-content-end">
                <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
            </div>
        </li>
    </ul>
 </div>`);

const block10 = ref(` <div class="surface-card p-4 shadow-2 border-round">
    <div class=" font-medium  mb-3">Card Title</div>
    <div class="font-medium  mb-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
    <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
 </div>`);
const checked = ref(false);
</script>

<template>
  <div>
    <BlockViewer
      header="Sign-In"
      :code="block8"
      container-class="surface-ground px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
      free
    >
      <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div class="text-center mb-5">
          <img src="/demo/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3" />
          <div class="font-medium mb-3">Welcome Back</div>
          <span class="font-medium line-height-3">Don't have an account?</span>
          <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
        </div>

        <div>
          <label for="email1" class="block font-medium mb-2">Email</label>
          <InputText id="email1" type="text" class="w-full mb-3" />

          <label for="password1" class="block font-medium mb-2">Password</label>
          <InputText id="password1" type="password" class="w-full mb-3" />

          <div class="flex align-items-center justify-content-between mb-6">
            <div class="flex align-items-center">
              <Checkbox id="rememberme1" v-model="checked" :binary="true" class="mr-2"></Checkbox>
              <label for="rememberme1">Remember me</label>
            </div>
            <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
          </div>

          <Button label="Sign In" icon="pi pi-user" class="w-full"></Button>
        </div>
      </div>
    </BlockViewer>

    <BlockViewer
      header="Description List"
      :code="block9"
      container-class="surface-section px-4 py-8 md:px-6 lg:px-8"
      free
    >
      <div class="surface-section">
        <div class="font-medium mb-3">Movie Information</div>
        <div class="mb-5">Morbi tristique blandit turpis. In viverra ligula id nulla hendrerit rutrum.</div>
        <ul class="list-none p-0 m-0">
          <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="w-6 md:w-2 font-medium">Title</div>
            <div class="w-full md:w-8 md:flex-order-0 flex-order-1">Heat</div>
            <div class="w-6 md:w-2 flex justify-content-end">
              <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
            </div>
          </li>
          <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="w-6 md:w-2 font-medium">Genre</div>
            <div class="w-full md:w-8 md:flex-order-0 flex-order-1">
              <Chip label="Crime" class="mr-2"></Chip>
              <Chip label="Drama" class="mr-2"></Chip>
              <Chip label="Thriller"></Chip>
            </div>
            <div class="w-6 md:w-2 flex justify-content-end">
              <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
            </div>
          </li>
          <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="w-6 md:w-2 font-medium">Director</div>
            <div class="w-full md:w-8 md:flex-order-0 flex-order-1">Michael Mann</div>
            <div class="w-6 md:w-2 flex justify-content-end">
              <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
            </div>
          </li>
          <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div class="w-6 md:w-2 font-medium">Actors</div>
            <div class="w-full md:w-8 md:flex-order-0 flex-order-1">Robert De Niro, Al Pacino</div>
            <div class="w-6 md:w-2 flex justify-content-end">
              <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
            </div>
          </li>
          <li class="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
            <div class="w-6 md:w-2 font-medium">Plot</div>
            <div class="w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
              A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue
              at their latest heist.
            </div>
            <div class="w-6 md:w-2 flex justify-content-end">
              <Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
            </div>
          </li>
        </ul>
      </div>
    </BlockViewer>

    <BlockViewer header="Card" :code="block10" container-class="px-4 py-8 md:px-6 lg:px-8" free>
      <div class="surface-card p-4 shadow-2 border-round">
        <div class="font-medium mb-3">Card Title</div>
        <div class="font-medium mb-3">Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.</div>
        <div style="height: 150px" class="border-2 border-dashed surface-border"></div>
      </div>
    </BlockViewer>
  </div>
</template>
