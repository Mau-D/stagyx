<template>
    <b-container class="carteTuteur p-2">
        <b-row>
            <b-col cols="8">
                <div>
                    <a class="text-dark-75 font-weight-bolder text-hover-primary mb-2 font-size-lg">
                        Know Expert
                    </a>
                    <span class="text-muted font-weight-bold d-block mb-5">
                        test@email.com
                    </span>
                    <b-button class="btn-info" style="font-weight: bold">
                        Contacter
                    </b-button>
                </div>
            </b-col>
            <b-col cols="4" class="mt-5 pt-5 pl-2">
                <div class="carteTuteurIcon ">
                    <div class=" symbol symbol-50 symbol-light mr-4">
                        <div>
                            <span class="symbol-label svg-icon-xl">
                                <img
                                    src="media/svg/avatars/020-girl-11.svg"
                                    class="h-90"
                                    alt=""
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: "CarteTuteurs"
}
</script>

<style>
.carteTuteur {
    background-color: #ffffff;
    height: 125px;
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
}
.carteTuteurIcon {
    display: flex;
    justify-content: center;
    align-items: center;
}
.carteTuteurIcon img {
    height: 100px;
}
</style>