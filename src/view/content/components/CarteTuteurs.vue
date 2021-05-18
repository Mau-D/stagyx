<template>
    <b-container class="carteTuteur">
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
            <div class="carteTuteurIcon ">
                <div class=" symbol symbol-50 symbol-light mr-4">
                    <div>
                        <span class="symbol-label svg-icon-xl">
                            <img
                                src="media/svg/avatars/020-girl-11.svg"
                                class="h-125"
                                alt=""
                            />
                        </span>
                    </div>
                </div>
            </div>
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
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
}
.carteTuteurIcon {
    display: flex;
    justify-content: end;
    align-content: flex-end;
}
.carteTuteurIcon img {
    height: 100px;
}
</style>