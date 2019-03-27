<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-12 qrcode">
                        <qrcode :value="text" :options="{ width: 250, color: {dark: color.hex, light: bgColor.hex} }"></qrcode>
                    </div>
                    <div class="col-lg-9 col-md-8 col-sm-12">
                        <div class="form">
                            <div class="form-group">
                                <label>Text :</label>
                                <input v-model="text" type="text" class="form-control">
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-sm-12">
                                    <div class="form-group">
                                        <label>Color [{{ color.hex }}] :</label>
                                        <slider-picker style="margin-bottom: 15px;" v-model="color" />
                                    </div>
                                </div>
                                <div class="col-lg-6 col-sm-12">
                                    <div class="form-group">
                                        <label>Background Color [{{ bgColor.hex }}] :</label>
                                        <slider-picker style="margin-bottom: 15px;" v-model="bgColor" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-success" @click="download">Save to computer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import slider from 'vue-color/src/components/Compact.vue'
export default {
    components: { 'slider-picker': slider },
    data(){
        return {
            text: 'https://facebook.com/viandwi24',
            color: '#0275d8',
            bgColor: '',
        }
    },
    methods: {
        download(){
            let img = document.querySelector('.qrcode canvas');
            let link = document.createElement('a');
            link.download = 'qrcode.png';
            link.href = img.toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
            link.click();
            // console.log(img);
            // window.location.href = img.toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');

            // img.attr('download', 'qrcode.png');
            // window.location.href = img.attr('src', img.attr('src').replace('image/png', 'image/octet-stream'))[0].src;
        }
    }
}
</script>
