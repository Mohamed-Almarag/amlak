<template>
    <div class="video-modal bg-white m-3" id="video-modal">
        <button class="close" type="button" @click="$emit('close')">
            <span>
                <i class="icon-close"></i>
            </span>
        </button>
        <iframe
            :src="href"
            frameborder="0"
            title="youtube"
            class="mfp-iframe"
        ></iframe>
    </div>
</template>
<script>
export default {
    props:['href']
}
</script>

