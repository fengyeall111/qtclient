<template>
     <logo class='ulogo art'></logo>
     <div class='art'>qtrobot</div>
</template>

<script setup>
import logo from '/src/assets/logo.svg';
</script>

<style>
  .ulogo{
  display:inline-block;
   width: auto;
   line-height:64px;
   height:inherit;
   font-size:60px;
   text-align:center;
   float:left;
}
    .art {
    font-size: 60px;
    float:left;
    font-weight: bold;
    text-align: center;
    text-transform:uppercase;
    color: transparent;
    background: linear-gradient(45deg, #ffeb3b,
     #009688, yellowgreen, pink, #03a9f4, #9c27b0, #8bc34a);
    background-size: cover;
    background-position: center center;
    background-clip: text;
    animation: huerotate 3s infinite;
}

@keyframes huerotate {
    100% {
        filter: hue-rotate(360deg);
    }
}
</style>
