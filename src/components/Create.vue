<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-12 qrcode">
                        <qrcode :value="text" :options="{ 'maskPattern': maskPattern, 'errorCorrectionLevel': errorCorrectionLevel, 'margin': margin, width: size, color: {dark: color.hex, light: bgColor.hex} }"></qrcode>
                    </div>
                    <div class="qrcode-render" v-if="renderQrCode" v-show="false">
                        <qrcode :value="text" :options="{ 'maskPattern': maskPattern, 'errorCorrectionLevel': errorCorrectionLevel, 'margin': margin, width: sizeRender, color: {dark: color.hex, light: bgColor.hex} }"></qrcode>
                    </div>
                    <div class="col-lg-9 col-md-8 col-sm-12">
                        <div class="form">
                            <div class="form-group mb-3">
                                <label>Text :</label>
                                <input v-model="text" type="text" class="form-control">
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <div class="form-group mb-3">
                                        <label>Size :</label>
                                        <select class="form-control" v-model="sizeRender">
                                            <option v-for="item in sizeAccepted" :key="item" :value="item">
                                                {{ item }} px
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group mb-3">
                                        <label>Margin :</label>
                                        <select class="form-control" v-model="margin">
                                            <option v-for="item in 10" :key="item" :value="item">
                                                {{ item }} px
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group mb-3">
                                        <label>Error Correction Level :</label>
                                        <select class="form-control" v-model="errorCorrectionLevel">
                                            <option v-for="item in errorCorrectionLevelAccepted" :key="item" :value="item">
                                                {{ item }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group mb-3">
                                        <label>Mask Pattern :</label>
                                        <select class="form-control" v-model="maskPattern">
                                            <option v-for="item in 8" :key="item" :value="item-1">
                                                {{ item-1 }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
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
                        <button :disabled="renderQrCode" class="btn btn-success" @click="download">
                            <span v-if="renderQrCode">Saving...</span>
                            <span v-else>Save to computer</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import slider from 'vue-color/src/components/Compact.vue'
import { setTimeout } from 'timers';
export default {
    components: { 'slider-picker': slider },
    data(){
        return {
            text: 'https://facebook.com/viandwi24',
            color: {hex: '#000000'},
            bgColor: {hex: '#ffffff'},
            size: 250,
            sizeRender: 250,
            sizeAccepted: [
                250,
                480,
                600,
                720,
                800,
                1280,
                1080,
                1920
            ],
            margin: 4,
            errorCorrectionLevel: 'M',
            errorCorrectionLevelAccepted: [
                'L', 'M', 'Q', 'H'
            ],
            maskPattern: 0,
            renderQrCode: false,
        }
    },
    methods: {
        download(){
            this.renderQrCode = true;
            let fg = this.color.hex.replace('#', '');
            let bg = this.bgColor.hex.replace('#', '');

            setTimeout(() => {

                
                let img = document.querySelector('.qrcode-render canvas');
                let link = document.createElement('a');
                link.download = 'qrcode_'+this.sizeRender+'_'+fg+'_'+bg+'.png';
                link.href = img.toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
                link.click();
                this.renderQrCode = false;

            }, 1000);
            


        }
    },
    mounted(){
    }
}
</script>
