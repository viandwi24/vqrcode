<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div v-if="error != ''" class="alert alert-danger" role="alert">
                    {{ error }}
                </div>
            </div>
            <div class="col-8">
                <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit" v-if="qrreader" />
            </div>
            <div class="col-4">
                <div v-if="waiting">
                    Scanning...
                </div>
                <div v-else>
                    <div v-if="error == ''">
                        <p>Result :<br>{{ result }}</p>
                    <button @click="forceRerender" class="btn btn-sm btn-primary">Re-scan</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            waiting: true,
            result: '',
            error: '',
            qrreader: true,
            camera: {},
        }
    },

    methods: {
        stopCamera () {
            this.waiting = false;
            this.camera = false
        },

        startCamera () {
            this.waiting = true;
            this.camera = true
        },
        forceRerender() {
            this.startCamera()
        },
        onDecode (result) {
            this.result = result
            this.stopCamera()
        },
        repaint (location, ctx) {
            if (location !== null) {
                const {
                topLeftFinderPattern,
                topRightFinderPattern,
                bottomLeftFinderPattern
                } = location

                const pointArray = [
                topLeftFinderPattern,
                topRightFinderPattern,
                bottomLeftFinderPattern
                ]

                ctx.fillStyle = '#007bff'

                pointArray.forEach(({ x, y }) => {
                ctx.fillRect(x - 5, y - 5, 10, 10)
                })
            }
        },

        async onInit (promise) {
            try {
                await promise
            } catch (error) {
                this.waiting = false;
                if (error.name === 'NotAllowedError') {
                this.error = "ERROR: you need to grant camera access permisson"
                } else if (error.name === 'NotFoundError') {
                this.error = "ERROR: no camera on this device"
                } else if (error.name === 'NotSupportedError') {
                this.error = "ERROR: secure context required (HTTPS, localhost)"
                } else if (error.name === 'NotReadableError') {
                this.error = "ERROR: is the camera already in use?"
                } else if (error.name === 'OverconstrainedError') {
                this.error = "ERROR: installed cameras are not suitable"
                } else if (error.name === 'StreamApiNotSupportedError') {
                this.error = "ERROR: Stream API is not supported in this browser"
                }
            }
        }
    },

    mounted(){
        this.startCamera()
    }
}
</script>
