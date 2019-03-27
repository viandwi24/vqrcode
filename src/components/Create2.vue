<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-3 qrcode">
                        <qr-code :text="texts" :size="size" :color="color" :bg-color="bgColor" v-if="qrcoderenderComponent"></qr-code>
                    </div>
                    <div class="col-9">
                        <div class="form">
                            <div class="form-group">
                                <label>Text :</label>
                                <input type="text" class="form-control" v-model="text">
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Color [{{ color }}] :</label>
                                        <slider-picker style="margin-bottom: 15px;" v-model="colors" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Background Color [{{ bgColor }}] :</label>
                                        <slider-picker style="margin-bottom: 15px;" v-model="bgColors" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button class="btn btn-secondary" @click="forceRerender" style="margin-right: 10px;">Update</button>
                        <a href="" class="btn btn-success" @click="download(this)">Save to computer</a>
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
    data() {
        return {
            text: 'https://facebook.com/viandwi24',
            texts: 'https://facebook.com/viandwi24',
            size: 250,
            colors: '#000',
            bgColors: '#fff',
            bgColor: '#fff',
            color: '#000',
            qrcoderenderComponent: true,
        }
    },
    watch: {
        colors(){
            this.color = this.colors.hex
        },
        bgColors(){
            this.bgColor = this.bgColors.hex
        }
    },
    methods: {
        download(e){
            let img = $('.qrcode img');
            console.log(img.attr('src'));
            // e.href = img.attr('src');
            // img.attr('download', 'qrcode.png');
            // window.location.href = img.attr('src', img.attr('src').replace('image/png', 'image/octet-stream'))[0].src;
        },
        forceRerender() {
            let data = {color: this.color, bgColor: this.bgColor};
            this.qrcoderenderComponent = false;
            this.$nextTick().then(() => {
                this.qrcoderenderComponent = true;
                this.texts = this.text
            });
        }
    }
}
</script>

<style>
.form {
    margin-bottom: 15px;
}
</style>
